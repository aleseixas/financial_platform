import pandas as pd
import yfinance as yf
from typing import List
import numpy as np

def getTickers(tickers: List, periodDefined = '10y') -> List: 
  stocks = []
  for ticker in tickers:
    stock_info = yf.Ticker(ticker).history(period=periodDefined)
    stock_info['Stock Name'] = ticker
    stock_info.dropna(inplace=True)
    stocks.append(stock_info)

  return stocks

def getRelativeReturn(stocks: List):
  for stock in stocks:
    stock['Relative Returns'] = (stock['Close'] / stock['Open']) - 1
  
  return stocks

def movingAvarageCalculator(stocks: List, windowSizeFast = 42, windowSizeSlow = 252) -> List:
  for stock in stocks:
    stock['MAF'] = stock['Close'].rolling(windowSizeFast).mean()
    stock['MAS'] = stock['Close'].rolling(windowSizeSlow).mean()
    stock.dropna(inplace=True)
  return stocks

def getSignals(stocks: List):
  for stock in stocks:
    stock['Signal'] = np.where(stock['MAF'] > stock['MAS'], 1, -1)
    stock.dropna(inplace=True)
  
  return stocks

def getReturns(stocks: List):
  for stock in stocks:
    stock['Strategy Return'] = stock['Relative Returns'] * stock['Signal']
    stock.dropna(inplace=True)

  return stocks

def getTotalReturn(stocks: List):
  for stock in stocks:
    stock['Total Return'] = 100 * (stock['Strategy Return'].cumsum() - 1)

  return stocks

def applyStrategy(tickersList: List):
  stocks = getTickers(tickersList)
  stocks = getRelativeReturn(stocks)
  stocks = movingAvarageCalculator(stocks)
  stocks = getSignals(stocks)
  results = getReturns(stocks)
  results = getTotalReturn(results)
  return results

def getHistoricalReturns(stocks: List):
  for stock in stocks:
    stock['Returns'] = stock['Relative Returns'].cumsum()
  
  return stocks