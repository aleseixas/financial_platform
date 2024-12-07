import pytest
from unittest.mock import patch, MagicMock
from typing import List
import pandas as pd
from unittest.mock import patch
from pytest import approx
from main import app
from main import getTickers
from main import getRelativeReturn
from stockAPI import (
    getTickers,
    getRelativeReturn,
    movingAvarageCalculator,
    getSignals,
    getReturns,
    getTotalReturn,
    applyStrategy,
    getHistoricalReturns
)

# Mocking the Yahoo Finance API response using unittest.mock
mock_data = {
    'Date': ['2022-01-01', '2022-01-02', '2022-01-03'],
    'Open': [100, 101, 102],
    'Close': [101, 102, 104],
    'High': [102, 103, 105],
    'Low': [99, 100, 101],
    'Volume': [1000, 1100, 1200]
}

# Create a mock stock history dataframe
mock_df = pd.DataFrame(mock_data)
mock_df['Date'] = pd.to_datetime(mock_df['Date'])

# test_mock.py

def test_always_passes():
    assert True  # This will always pass


# Mock data for yfinance response
mock_data = pd.DataFrame({
    "Open": [100, 102],
    "Close": [110, 104],
    "High": [115, 108],
    "Low": [95, 101],
    "Volume": [1000, 1200]
}, index=pd.to_datetime(["2023-01-01", "2023-01-02"]))

# Test cases
@patch("yfinance.Ticker")  
def test_getTickers_equivalence_partitioning(mock_ticker):
    """
    Test equivalence partitioning with valid and invalid input scenarios.
    """
    mock_ticker_instance = MagicMock()
    mock_ticker_instance.history.return_value = mock_data
    mock_ticker.return_value = mock_ticker_instance

    tickers = ["AAPL", "MSFT"]
    result = getTickers(tickers)


    assert len(result) == len(tickers)
    for stock, ticker in zip(result, tickers):
        assert "Stock Name" in stock.columns
        assert all(stock["Stock Name"] == ticker)

    tickers = []
    result = getTickers(tickers)
    assert result == []  

    mock_ticker_instance.history.side_effect = Exception("Invalid ticker")
    with pytest.raises(Exception, match="Invalid ticker"):
        getTickers(["INVALID"])

@patch("yfinance.Ticker") 
def test_getTickers_boundary_analysis(mock_ticker):
    """
    Test boundary value scenarios for the input.
    """
    mock_ticker_instance = MagicMock()
    mock_ticker_instance.history.return_value = mock_data
    mock_ticker.return_value = mock_ticker_instance

    tickers = ["AAPL"]
    result = getTickers(tickers)
    assert len(result) == 1
    assert "Stock Name" in result[0].columns
    assert all(result[0]["Stock Name"] == "AAPL")

    tickers = ["AAPL"] * 1000
    result = getTickers(tickers)
    assert len(result) == 1000
    assert all(r["Stock Name"].iloc[0] == "AAPL" for r in result)

    with pytest.raises(Exception):
        getTickers(["AAPL"], periodDefined="invalid_period")
