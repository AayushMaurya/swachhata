import React,{useState} from 'react'
import Article from '../AfterResister/components/Article'
import ReactMapGL,{Marker} from 'react-map-gl'
import * as binLoc from "./bin"
import RoomIcon from '@material-ui/icons/Room';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// import News from '../AfterResister/components/News'
import Navbar from './components/Navbar'
function HomeD() {
    const [getLoc,setLoc]= useState({lat:28.7041,long:77.1025});
    const track=()=>{


        const showLoc=(data)=>{
            //console.log(data.coords.latitude);
            let lat=data.coords.latitude
            let long=data.coords.longitude
            setLoc({lat:lat,long:long})
            }
            navigator.geolocation.watchPosition(
                showLoc,error=>console.log(error),
                {
                    enableHighAccuracy:true,
                    timeout:1000
                }
                
            )
    }
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '70vh',
        latitude: 28.7041,
        longitude: 77.1025,
        zoom: 16
      });

    return (
        <div style={{ paddingTop: 4 }}>
         <button  onClick={track} >Track my vehicle's location</button>
            <Navbar />
            {/* <News /> */}

            <ReactMapGL
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoibXJpZHVsc3RhciIsImEiOiJja3JudnBubXc0bDlyMnpwOHNrOXVzNXYwIn0.ryB1v11gBLBBtUTXOnaNmA'
      mapStyle="mapbox://styles/mapbox/satellite-v8" 
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        <Marker latitude={getLoc.lat} longitude={getLoc.long}>
        <div><LocalShippingIcon

        style={{color:"black",fontSize:40}}/></div>
      </Marker>
        {
          binLoc.binLoc.map((obj,ind)=>{
            // console.log(obj.lat)
             return(
                <Marker latitude={obj.lat} longitude={obj.long}>
               <div><RoomIcon style={{color:"red",fontSize:40}}/></div>
              </Marker>
             )
         })
      }
        </ReactMapGL>
           
        </div>
    )
}

export default HomeD
