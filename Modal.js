import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Modal = ({ isOpen, onRequestClose }) => {
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const handleBacktest = () => {
    onRequestClose();

    let filePath = '';
    if (selectedStock === 'Google' && selectedStrategy === 'SMA Cross') {
      filePath = '/strategies/SmaCross.html';
    } else if (selectedStock === 'Apple' && selectedStrategy === 'SMA Cross') {
      filePath = '/strategies/SmaCrossAAPL.html'; // Adjust as needed
    }else if (selectedStock === 'Tesla' && selectedStrategy === 'SMA Cross') {
        filePath = '/strategies/SmaCrossTSLA.html'; // Adjust as needed
      }else if (selectedStock === 'Microsoft' && selectedStrategy === 'SMA Cross') {
        filePath = '/strategies/SmaCrossMSFT.html'; // Adjust as needed
      }else if (selectedStock === 'Wipro' && selectedStrategy === 'SMA Cross') {
        filePath = '/strategies/SmaCrossWIT.html'; // Adjust as needed
      }else if (selectedStock === 'Reliance' && selectedStrategy === 'SMA Cross') {
        filePath = '/strategies/SmaCrossRELIANCE.html'; // Adjust as needed
      }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'SMA Cross') {
        filePath = '/strategies/SmaCrossADANIENT.html'; // Adjust as needed
      }
      
      
      else if (selectedStock === 'Google' && selectedStrategy === 'MACD') {
        filePath = '/strategies/MyMACDStrategyGOOG.html';
      } else if (selectedStock === 'Apple' && selectedStrategy === 'MACD') {
        filePath = '/strategies/MyMACDStrategyAAPL.html'; // Adjust as needed
      }else if (selectedStock === 'Tesla' && selectedStrategy === 'MACD') {
          filePath = '/strategies/MyMACDStrategyTSLA.html'; // Adjust as needed
        }else if (selectedStock === 'Microsoft' && selectedStrategy === 'MACD') {
          filePath = '/strategies/MyMACDStrategyMSFT.html'; // Adjust as needed
        }else if (selectedStock === 'Wipro' && selectedStrategy === 'MACD') {
          filePath = '/strategies/MyMACDStrategyWIT.html'; // Adjust as needed
        }else if (selectedStock === 'Reliance' && selectedStrategy === 'MACD') {
          filePath = '/strategies/MyMACDStrategyRELIANCE.html'; // Adjust as needed
        }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'MACD') {
          filePath = '/strategies/MyMACDStrategyADANIENT.html'; // Adjust as needed
        }


        else if (selectedStock === 'Google' && selectedStrategy === 'RSI') {
        filePath = '/strategies/RsiOscillatorGOOG.html';
      } else if (selectedStock === 'Apple' && selectedStrategy === 'RSI') {
        filePath = '/strategies/RsiOscillatorAAPL.html'; // Adjust as needed
      }else if (selectedStock === 'Tesla' && selectedStrategy === 'RSI') {
          filePath = '/strategies/RsiOscillatorTSLA.html'; // Adjust as needed
        }else if (selectedStock === 'Microsoft' && selectedStrategy === 'RSI') {
          filePath = '/strategies/RsiOscillatorMSFT.html'; // Adjust as needed
        }else if (selectedStock === 'Wipro' && selectedStrategy === 'RSI') {
          filePath = '/strategies/RsiOscillatorWIT.html'; // Adjust as needed
        }else if (selectedStock === 'Reliance' && selectedStrategy === 'RSI') {
          filePath = '/strategies/RsiOscillatorRELIANCE.html'; // Adjust as needed
        }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'RSI') {
          filePath = '/strategies/RsiOscillatorADANIENT.html'; // Adjust as needed
        }


        else if (selectedStock === 'Google' && selectedStrategy === 'VWAP') {
            filePath = '/strategies/VWAPStrategGOOG.html';
          } else if (selectedStock === 'Apple' && selectedStrategy === 'VWAP') {
            filePath = '/strategies/VWAPStrategAAPL.html'; // Adjust as needed
          }else if (selectedStock === 'Tesla' && selectedStrategy === 'VWAP') {
              filePath = '/strategies/VWAPStrategTSLA.html'; // Adjust as needed
            }else if (selectedStock === 'Microsoft' && selectedStrategy === 'VWAP') {
              filePath = '/strategies/VWAPStrategMSFT.html'; // Adjust as needed
            }else if (selectedStock === 'Wipro' && selectedStrategy === 'VWAP') {
              filePath = '/strategies/VWAPStrategWIT.html'; // Adjust as needed
            }else if (selectedStock === 'Reliance' && selectedStrategy === 'VWAP') {
              filePath = '/strategies/VWAPStrategRELIANCE.html'; // Adjust as needed
            }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'VWAP') {
              filePath = '/strategies/VWAPStrategADANIENT.html'; // Adjust as needed
            }


            else if (selectedStock === 'Google' && selectedStrategy === 'AROON') {
                filePath = '/strategies/AroonStrategyGOOG.html';
              } else if (selectedStock === 'Apple' && selectedStrategy === 'AROON') {
                filePath = '/strategies/AroonStrategyAAPL.html'; // Adjust as needed
              }else if (selectedStock === 'Tesla' && selectedStrategy === 'AROON') {
                  filePath = '/strategies/AroonStrategyTSLA.html'; // Adjust as needed
                }else if (selectedStock === 'Microsoft' && selectedStrategy === 'AROON') {
                  filePath = '/strategies/AroonStrategyMSFT.html'; // Adjust as needed
                }else if (selectedStock === 'Wipro' && selectedStrategy === 'AROON') {
                  filePath = '/strategies/AroonStrategyWIT.html'; // Adjust as needed
                }else if (selectedStock === 'Reliance' && selectedStrategy === 'AROON') {
                  filePath = '/strategies/AroonStrategyRELIANCE.html'; // Adjust as needed
                }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'AROON') {
                  filePath = '/strategies/AroonStrategyADANIENT.html'; // Adjust as needed
                }


                else if (selectedStock === 'Google' && selectedStrategy === 'Fibonacci Strategy') {
                    filePath = '/strategies/FibonacciStrategyGOOG.html';
                  } else if (selectedStock === 'Apple' && selectedStrategy === 'Fibonacci Strategy') {
                    filePath = '/strategies/FibonacciStrategyAAPL.html'; // Adjust as needed
                  }else if (selectedStock === 'Tesla' && selectedStrategy === 'Fibonacci Strategy') {
                      filePath = '/strategies/FibonacciStrategyTSLA.html'; // Adjust as needed
                    }else if (selectedStock === 'Microsoft' && selectedStrategy === 'Fibonacci Strategy') {
                      filePath = '/strategies/FibonacciStrategyMSFT.html'; // Adjust as needed
                    }else if (selectedStock === 'Wipro' && selectedStrategy === 'Fibonacci Strategy') {
                      filePath = '/strategies/FibonacciStrategyWIT.html'; // Adjust as needed
                    }else if (selectedStock === 'Reliance' && selectedStrategy === 'Fibonacci Strategy') {
                      filePath = '/strategies/FibonacciStrategyRELIANCE.html'; // Adjust as needed
                    }else if (selectedStock === 'Adani Enterprises Limited' && selectedStrategy === 'Fibonacci Strategy') {
                      filePath = '/strategies/FibonacciStrategyADANIENT.html'; // Adjust as needed
                    }
    
    if (filePath) {
      window.location.href = filePath; // Redirect to the static HTML file
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        <button onClick={onRequestClose} className="float-right text-lg">X</button>
        
        <div>
          <select onChange={(e) => setSelectedStock(e.target.value)} className="p-2 border rounded">
            <option value="">Select Stock</option>
            <option value="Google">Google</option>
            <option value="Apple">Apple</option>
            <option value="Tesla">Tesla</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Wipro">Wipro</option>
            <option value="Reliance">Reliance</option>
            <option value="Adani Enterprises Limited">Adani Enterprises Limited</option>
            {/* Add other stock options here */}
          </select>

          <select onChange={(e) => setSelectedStrategy(e.target.value)} className="p-2 border rounded mt-2">
            <option value="">Select Strategy</option>
            <option value="SMA Cross">SMA Cross</option>
            <option value="MACD">MACD</option>
            <option value="RSI">RSI</option>
            <option value="VWAP">VWAP</option>
            <option value="AROON">AROON</option>
            <option value="Fibonacci Strategy">Fibonacci Strategy</option>
            
            {/* Add other strategy options here */}
          </select>
        </div>S

        <button 
          onClick={handleBacktest} 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Backtest
        </button>
      </div>
    </div>
  );
};

export default Modal;