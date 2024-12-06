import pytest
import pandas as pd
from unittest.mock import patch
from pytest import approx
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

