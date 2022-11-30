import './App.css';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/index';
import Home from './Pages/Home';
import Chashbek from './Pages/Chashbek';
import Rassrochka from './Pages/Rassrochka';
import Banks from './Pages/Banks';

function App() {
  // const cards = [
  //   {
  //     id:1,
  //     name: 'John',
  //     image: '/img/belarusbank_logo.jpg',
  //     description: 'lorem12',
  //     type: 'chashback'
  //   },
  //   {
  //     id:2,
  //     name: 'John',
  //     image: '/img/belarusbank_logo.jpg',
  //     description: 'lorem12',
  //     type: 'chashback'
  //   }
  // ];
  const banks = [
    {
      id: 1,
      name: 'БеларусБанк',
      description: 'Крупнейший банк страны',
      image: '/img/belarusbank_logo.jpg',
      news:[
        {
          id:1,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',
        },
        {
          id:2,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',        
        }
      ],
      adresses: [
        {
          id:1,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }, 
        {
          id:2,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }],
      installmentCards:[  
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        },
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
      chashbackCards: [
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            },
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
    },
    {
      id: 2,
      name: 'Альфа Банк',
      description: 'Chash',
      image: '/img/alfa.png',
      news:[
        {
          id:1,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',
        },
        {
          id:2,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',        
        }
      ],
      adresses: [
        {
          id:1,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }, 
        {
          id:2,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }],
      installmentCards:[
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        },
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
      chashbackCards: [
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            },
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
    },
    {  
      id: 3,
      name: 'Белгазпромбанк',
      description: 'lorem12 ',
      image: '/img/belgazprombanklogo.jpg',
      news:[
        {
          id:1,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',
        },
        {
          id:2,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',        
        }
      ],
      adresses: [
        {
          id:1,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }, 
        {
          id:2,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }],
      installmentCards:[
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        },
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
      chashbackCards: [
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            },
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
    },
    {
      id: 4,
      name: 'Альфа Банк',
      description: 'Chaasdasdsh',
      image: '/img/belarusbank_logo.jpg',
      news:[
        {
          id:1,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',
        },
        {
          id:2,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',        
        }
      ],
      adresses: [
        {
          id:1,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }, 
        {
          id:2,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }],
      installmentCards:[
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        },
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
      chashbackCards: [
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            },
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
    },
    {
      id: 5,
      name: 'БеларусБанк',
      description: 'Chas sdf sdf sdfh',
      image: '/img/belarusbank_logo.jpg',
      news:[
        {
          id:1,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',
        },
        {
          id:2,
          name: 'Belarus',
          description: 'logo image',
          links: 'http://',        
        }
      ],
      adresses: [
        {
          id:1,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }, 
        {
          id:2,
          area:'dfgh',
          street:'',
          home:1,
          building:''
        }],
      installmentCards:[
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        },
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }, 
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
      chashbackCards: [
        {
          id: 1,
          name: 'Belarus',
          links: 'jd',
          image: 'http://',
          description: 'Belarus',
          cost: '',
          moneyBack: '',
          bonus:[
            {
              id: 1,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            },
            {
              id: 2,
              name: 'Belarus',
              default: 'dhbxbvdxk',
            }
          ],
        }
      ],
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home banksArray={banks}/>}/>
            <Route exact path="/banks" element={<Banks banksArray={banks}/>}/>
            <Route exact path="/chashback" element={<Chashbek/>}/>
            <Route exact path="/rassrochka" element={<Rassrochka/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
