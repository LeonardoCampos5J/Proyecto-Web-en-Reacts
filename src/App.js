import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import background from './fondo.jpeg'
//import React from 'react';
import React, { useState } from 'react';
import axios, { Axios } from 'axios';


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


const redireccionar = () => {
window.location.href = 'App.js'; // Redirige a la misma página
};
const MyComponent = () => {
  const styles = {
    container: {
      width: '200px',
      marginBottom: '4%',
      
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    imga:{
      width: '1380px'
    },
    card : {
  

    }
  
  };
  
  const [contenido, setContenido] = useState('Contenido 1');
  const [contenido2, setContenido2] = useState(<Container fluid="md">
    
  <Row>
    <Col>
        {[
          'Primary',

          ].map((variant) => (
          <Card border="Primary" style={{ width: '18rem' }}
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-2"
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src="https://www.pngkey.com/png/full/920-9202028_free-png-led-television-png-images-transparent-plantilla.png" alt="placeholder" />

          <Card.Body>
              <Card.Text>
                <center>
                <p>Disfrutá la mejor programación en definición HD y 4K. Acceso directo a las mejores plataformas de streaming.</p>

                </center>
              </Card.Text>
              <center>
              <button type="button" class="btn btn-light">Conocer Más</button>
                </center>
            </Card.Body>
        </Card>
      ))}        
  </Col>
    <Col>
      {[
      'Primary',

      ].map((variant) => (
      <Card border="Primary" style={{ width: '18rem' }}
       bg={variant.toLowerCase()}
       key={variant}
       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
       className="mb-2"
      >
        <br></br>
          <img src="https://static.vecteezy.com/system/resources/previews/009/662/857/non_2x/wifi-hotsport-icon-transparent-free-png.png" alt="placeholder" />

        <Card.Body>
            <Card.Text>
              <center>
              <p>Navegá en tu casa con Planes de Internet de hasta 1000 megas con la red más rápida y estable.</p>

              </center>
            </Card.Text>
            <center>
            <button type="button" class="btn btn-light">Conocer Más</button>
            </center>
          </Card.Body>
      </Card>
      ))}
    </Col>

    <Col>
      {[
        'Primary',

        ].map((variant) => (
        <Card border="Primary" style={{ width: '18rem' }}
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        className="mb-2"
        >
            <img src="https://i.pinimg.com/originals/96/5d/a4/965da4c5163f193d65e9e78c900bb48f.png" alt="placeholder" />

          <Card.Body>
              <Card.Text>
                <center>
                <p>Viví lo último en tecnología con el asistente virtual Alexa, calidad de imagen 4K HDR y sonido envolvente.</p>

                </center>
              </Card.Text>
              <center>
              <button type="button" class="btn btn-light">Conocer Más</button>
              </center>
            </Card.Body>
        </Card>
        ))}        
    </Col>
  </Row>
</Container>);

  const cambiarContenido = () => {
    if (contenido === 'Contenido 1') {
      setContenido('Contenido 2');
      setContenido2(
        <Container style={{color: 'White' }}>
        <h1 class="titulos">¿Quienes Somos?</h1>
        <aside class="contenido1">
            <p id="perfil"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Telecentro.png" alt="" id="imagenes"/></p>
            <p><strong>Número de Teléfono</strong>: 6380 9500</p>
            <p><strong>Correo: </strong>clientes@telecentro.net.ar</p>
        </aside>
        <p class="contenido2"> Telecentro es una empresa dedicada al mercado de las telecomunicaciones. 
            Su oferta de servicios incluye la provisión de servicios de televisión por cable, telefonía fija e Internet, Telecentro S.A. es una empresa de telecomunicaciones desde 1990.
        </p>
        <br></br>
        </Container>
      );
    } else {
      setContenido('Contenido 1');
      setContenido2(            
        <Container style={{color: 'White' }}>
        <h1 class="titulos">¿Quienes Somos?</h1>
        <aside class="contenido1">
            <p id="perfil"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Telecentro.png" alt="" id="imagenes"/></p>
            <p><strong>Número de Teléfono</strong>: 6380 9500</p>
            <p><strong>Correo: </strong>clientes@telecentro.net.ar</p>
        </aside>
        <p class="contenido2"> Telecentro es una empresa dedicada al mercado de las telecomunicaciones. 
            Su oferta de servicios incluye la provisión de servicios de televisión por cable, telefonía fija e Internet, Telecentro S.A. es una empresa de telecomunicaciones desde 1990.
        </p>
        <br></br>
        </Container>
      );
    }
  
    
  };
  const [tercer, setTercer] = useState('Contenido 1');
  const [tecer2, setTercer2] = useState();

  const cambiarTercer = () => {
    if (tercer === 'Contenido 1') {
      setTercer2('Contenido 2');
      setContenido2(
        <article  style={{ paddingLeft: '4%' }}>
          <Container>
            <Row>
              <Col></Col>
              <Col><h1 class="titulos" style={{ color: 'white',paddingLeft: '10%' }}>Sucursales</h1></Col>
              <Col></Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <Row>
              <Col class="col-sm-6 mb-3 mb-sm-0">
                <Card style={{ width: '18rem'}} >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.80394804673!2d-93.11828702669908!3d16.786426819843083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8b65a57bc09%3A0x9cc323440623ac26!2s15%20de%20Noviembre%20LTA%20MZ38%2C%20Lindavista%20Shanka%2C%2029016%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1710013390696!5m2!1ses-419!2smx" style={{ width: '400', height: '300px'}}></iframe>

                    <Card.Body>
                    <h5 class="card-title">Tuxtla Gutiérrez, Chiapas.</h5>
                    <p class="card-text">15 de Noviembre LTA MZ38, Lindavista Shanka, 29016 Tuxtla Gutiérrez, Chis.</p>

                    </Card.Body>
                </Card>
              </Col>
              <Col class="col-sm-6 mb-3 mb-sm-0">
                <Card style={{ width: '18rem'}} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.596979098432!2d-92.9294408845839!3d17.997477971454916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd82335dae773%3A0xa00ac8e8e3ff1108!2sCpi%20Ingenier%C3%ADa%20y%20Administraci%C3%B3n%20de%20Proyectos!5e0!3m2!1ses-419!2smx!4v1710013650145!5m2!1ses-419!2smx"style={{ width: '400', height: '300px'}} ></iframe>

                  <Card.Body>
                  <h5 class="card-title">Villahermosa, Tabasco.</h5>
                  <p class="card-text">Tulipanes 111, Lago Ilusiones, 86040 Villahermosa, Tab.
                      <br>
                      </br>
                      <br>
                      </br>
                  </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col class="col-sm-6 mb-3 mb-sm-0">
                <Card style={{ width: '18rem'}} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.965761953331!2d-92.64352176478354!3d16.728560072767525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed456b6939af21%3A0x38831807c284ee1c!2sCentral%20LB%2C%20Las%20Rosas%2C%2029279%20San%20Crist%C3%B3bal%20de%20las%20Casas%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1710014167059!5m2!1ses-419!2smx" style={{ width: '400', height: '300px'}} ></iframe>

                  <Card.Body>
                  <h5 class="card-title">San Cristóbal de las Casas, Chiapas.</h5>
                  <p class="card-text">Central LB, Las Rosas, 29279 San Cristóbal de las Casas, Chis.
                      <br>
                      </br>
                 
                  </p>
                  </Card.Body>
                </Card>
              </Col>


            </Row>
          </Container>
          <br></br>
        </article>

      );
    } else {
      setTercer('Contenido 1');
      setTercer2(<img src="https://www.pngkey.com/png/full/920-9202028_free-png-led-television-png-images-transparent-plantilla.png" alt="placeholder" />
      )
    }
  
    
  };
  const [formulario, setFormulario] = useState('Contenido 1');
  const [formulario2, setFormulario2] = useState();

  const [correo, setCorreo] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");
  const regex = /^961[1-9][0-9]{6}$/;
  const regex2 = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  const regex3 = /^[a-zA-Z]+(?: [a-zA-Z]+){0,3}$/;


  const  badWords = ["joto", "mala2", "mala3","zorra"] ;

  function hasBadWords(comentarios, badWords) {
    for (let i = 0; i < badWords.length; i++) {
      if (comentarios.toLowerCase().includes(badWords[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  }



  const handleSubmit = (e) => {

    
    e.preventDefault();
    if ((regex2.test(correo) && correo !== '.@gmail.com' && correo !== '123456@gmail.com' && correo !== '0000.@gmail.com') && regex.test(telefono) &&(regex3.test(nombre)) && (!hasBadWords(comentarios, badWords))) {
      // Enviar datos al backend
      fetch("http://localhost/prueba/cone.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correo: correo,
          comentarios: comentarios,
          telefono: telefono,
          nombre: nombre
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta del backend:", data);
        alert(data.message);
      })
      .catch(error => {
        console.error("Error al enviar datos al backend:", error);
        alert("Error al enviar datos al backend");
      });
    } if ((regex2.test(correo) && correo !== '.@gmail.com' && correo !== '123456@gmail.com' && correo !== '0000.@gmail.com') && regex.test(telefono)&&(telefono!=="9610000000", "9610000001", "9610000010", "9610000011", "9610000100", "9610000101", "9610000110", "9610000111", "9610001000", "9610001001", "9610001010", "9610001011", "9610001100", "9610001101", "9610001110", "9610001111", "9610010000", "9610010001", "9610010010", "9610010011", "9610010100", "9610010101", "9610010110", "9610010111", "9610011000", "9610011001", "9610011010", "9610011011", "9610011100", "9610011101", "9610011110", "9610011111", "9610100000", "9610100001", "9610100010", "9610100011", "9610100100", "9610100101", "9610100110", "9610100111", "9610101000", "9610101001", "9610101010", "9610101011", "9610101100", "9610101101", "9610101110", "9610101111", "9610110000", "9610110001", "9610110010", "9610110011", "9610110100", "9610110101", "9610110110", "9610110111", "9610111000", "9610111001", "9610111010", "9610111011", "9610111100", "9610111101", "9610111110", "9610111111", "9611000000", "9611000001", "9611000010", "9611000011", "9611000100", "9611000101", "9611000110", "9611000111", "9611001000", "9611001001", "9611001010", "9611001011", "9611001100", "9611001101", "9611001110", "9611001111", "9611010000", "9611010001", "9611010010", "9611010011", "9611010100", "9611010101", "9611010110", "9611010111", "9611011000", "9611011001", "9611011010", "9611011011", "9611011100", "9611011101", "9611011110", "9611011111", "9611100000", "9611100001", "9611100010", "9611100011", "9611100100", "9611100101", "9611100110", "9611100111", "9611101000", "9611101001", "9611101010", "9611101011", "9611101100", "9611101101", "9611101110", "9611101111", "9611110000", "9611110001", "9611110010", "9611110011", "9611110100", "9611110101", "9611110110", "9611110111", "9611111000", "9611111001", "9611111010", "9611111011", "9611111100", "9611111101", "9611111110", "9611111111","9611010011"
    ) &&(regex3.test(nombre)) && (!hasBadWords(comentarios, badWords)) && !regex3.test(telefono)) {
          // Enviar datos al backend
          fetch("http://localhost/prueba/cone.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              correo: correo,
              comentarios: comentarios,
              telefono: telefono,
              nombre: nombre
            })
          })
          .then(response => response.json())
          .then(data => {
            console.log("Respuesta del backend:", data);
            alert(data.message);
          })
          .catch(error => {
            console.error("Error al enviar datos al backend:", error);
            alert("Error al enviar datos al backend");
          });
        } else if((!regex3.test(nombre))) {
          alert("El nombre debe ser unicamente letras");
        }else if(!regex.test(telefono)&&(telefono=="9610000000", "9610000001", "9610000010", "9610000011", "9610000100", "9610000101", "9610000110", "9610000111", "9610001000", "9610001001", "9610001010", "9610001011", "9610001100", "9610001101", "9610001110", "9610001111", "9610010000", "9610010001", "9610010010", "9610010011", "9610010100", "9610010101", "9610010110", "9610010111", "9610011000", "9610011001", "9610011010", "9610011011", "9610011100", "9610011101", "9610011110", "9610011111", "9610100000", "9610100001", "9610100010", "9610100011", "9610100100", "9610100101", "9610100110", "9610100111", "9610101000", "9610101001", "9610101010", "9610101011", "9610101100", "9610101101", "9610101110", "9610101111", "9610110000", "9610110001", "9610110010", "9610110011", "9610110100", "9610110101", "9610110110", "9610110111", "9610111000", "9610111001", "9610111010", "9610111011", "9610111100", "9610111101", "9610111110", "9610111111", "9611000000", "9611000001", "9611000010", "9611000011", "9611000100", "9611000101", "9611000110", "9611000111", "9611001000", "9611001001", "9611001010", "9611001011", "9611001100", "9611001101", "9611001110", "9611001111", "9611010000", "9611010001", "9611010010", "9611010011", "9611010100", "9611010101", "9611010110", "9611010111", "9611011000", "9611011001", "9611011010", "9611011011", "9611011100", "9611011101", "9611011110", "9611011111", "9611100000", "9611100001", "9611100010", "9611100011", "9611100100", "9611100101", "9611100110", "9611100111", "9611101000", "9611101001", "9611101010", "9611101011", "9611101100", "9611101101", "9611101110", "9611101111", "9611110000", "9611110001", "9611110010", "9611110011", "9611110100", "9611110101", "9611110110", "9611110111", "9611111000", "9611111001", "9611111010", "9611111011", "9611111100", "9611111101", "9611111110", "9611111111","9611010011"
        ) && regex3.test(telefono)) {
          alert("el numero es erroneo ejemplo:9613302387");
        }else if((hasBadWords(comentarios, badWords))) {
          alert("no se aceptan malas palabras");
        }else {
          alert("El correo debe ser de Gmail.");
        }
  };

  const cambiarForm = () => {
    if (formulario === 'Contenido 1') {
      setFormulario('Contenido 2');
      setContenido2( 

      <Container fluid="md" style={{paddingLeft: "8%"}}>
    
      <Row>
        
        <Col>
          {[
          'Primary',
    
          ].map((variant) => (
          <Card border="Primary" style={{ width: '25rem',height:"20rem"}}
           bg={variant.toLowerCase()}
           key={variant}
           text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
           className="mb-2"
          >
              <img src="https://creacionesmg.com.ar/wp-content/uploads/2022/01/blog_telecentro-10.jpg" alt="placeholder" style={{height: "400px", width: "400px"}} />
    
            <Card.Body>
                <Card.Text>

                </Card.Text>

              </Card.Body>
          </Card>
          ))}
        </Col>
    
        <Col style={{paddingLeft: "2%"}}>
          {[
            'Primary',
    
            ].map((variant) => (
            <Card border="Primary" style={{ width: '25rem',height:"20rem"}}
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            className="mb-2"
            >
                <img src="https://media.licdn.com/dms/image/D4D05AQG7f4ZUM1SLGA/feedshare-thumbnail_720_1280/0/1683034607552?e=2147483647&v=beta&t=fDukAnKgTvHWkrN6POT7d5D4EV09Sj36jDdKnP5Ea_g" alt="placeholder" style={{ width: '25rem',height:"20rem"}}/>
    
              <Card.Body>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
            </Card>
            ))}        
        </Col>
        <Col style={{  paddingLeft: "10%"}}>
        {[
            'Primary',
    
            ].map((variant) => (
            <Card border="Primary" style={{ width: '20rem',height:"20rem"}}
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            className="mb-2"
            >
              <center><img src="https://pbs.twimg.com/media/Fo8NjfeWYAMKohw.jpg" alt="placeholder" style={{ width: '50rem',height:"20rem"}}/>
</center>
              <Card.Body>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
            </Card>
            ))}        
        </Col>
      </Row>
 
      
    </Container>
  
    );

    } else {
      setFormulario('Contenido 1');
      setFormulario2(<img src="https://www.pngkey.com/png/full/920-9202028_free-png-led-television-png-images-transparent-plantilla.png" alt="placeholder" />
      )
    }
  
    
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={redireccionar}>
        <img src={ require ("./Telecentro.png")} alt="" style={styles.container}></img>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" href="#" onClick={cambiarContenido}>¿Quienes Somos?</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="#" onClick={cambiarTercer}>Sucursales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={cambiarForm} >Contactanos</a>
            </li>
          </ul> 
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </div>
      </div>
    </nav>
    
    <Carousel>
      <Carousel.Item>
      <img src={ require ("./promo1.jpg")} alt="" style={styles.imga}></img>

     
      </Carousel.Item>
      <Carousel.Item>
      <img src={ require ("./promo2.jpg")} alt="" style={styles.imga}></img>

        <Carousel.Caption>
   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ require ("./promo3.jpg")} alt="" style={styles.imga}></img>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <br></br>
  
      <div>{contenido2}</div>
<br></br>
<br></br>
      <Container>
         <h1 style={{ color: 'white'}}><strong>Envianos Tus Comentarios</strong></h1>
          <Row>
            <Col>
              <Form style={{ color: 'white'}} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control type="text" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)} required  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="number" placeholder="961..." value={telefono} onChange={(e) => setTelefono(e.target.value)} required  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control type="text" placeholder="comentario" value={comentarios} onChange={(e) => setComentarios(e.target.value)} required   />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
              </Form>              
            </Col>
          </Row>
          <br></br>
        </Container>

      <MDBFooter bgColor='dark' className='text-center text-lg-left' >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',color: 'white' }}>
        &copy; {new Date().getFullYear()} Telecentro:{' '}
        <p>Calle 16 oriente Norte</p> <h6>Tuxtla Gutierrez, Chiapas</h6>
        <p>+52-961-247-4536</p>
      </div>
    </MDBFooter>
    
    </div>

    
    
  );
  
}
export default MyComponent;