import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../Style/Dashbord.css'
import { BarChart, XAxis, YAxis, Bar,PieChart, Pie, Tooltip ,ResponsiveContainer} from 'recharts';
import dash from '../Asset/Dashboard.png'

function Dashborde() {

    const [data,setdata] = useState([]);
    const [piro,setpority] = useState([]);
    const[low,setlow]=useState();
    const[medium,setmidum] = useState();
    const[high,sethiger] = useState();
     
    const datas = [
      { name: 'HIGH', value: high ,fill: '#FF6384'},
      { name: 'MEDIUM', value: medium ,fill: '#F2C94C'},
      { name: 'LOW', value: low ,fill: '#2F80ED'},
    ];
    useEffect(()=>{

      
        takedata()
        chartstart()
        
    },[])
    function takedata(){
      
        axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do').then((res)=>{
            setdata(res.data)
        })
        
   
    }
    
   function chartstart(){
    
   
    const arry =[];
    let highs =0;
    let lows = 0;
    let mediums = 0;
         for(let i=0;i<data.length;i++){
          arry.push(data[i].priority)
         }
        console.log(arry)
 
        for(let i=0;i<arry.length;i++){
            if(arry[i] == 'HIGH'){
             highs++
            }else if(arry[i] == 'MEDIUM'){
             lows++
            }else if(arry[i]=='LOW'){
             mediums++ 
            }
        }
        console.log('hih',highs)
        sethiger(highs)
        console.log('mediums',mediums)
        setmidum(mediums)
        console.log('lows',lows)
        setlow(lows)
  
   }
 
    //console.log(data)
  //  console.log(data[1])
   
  //oo.push(data[1].priority)
   //console.log('hhsd',oo)
   // console.log(data.length)
   // console.log('priority',oo)
    
     //console.log(data.priority)

  

  return (
  
    <div id="rap">
          
           <div id="main" className='clearfix'>
              <div id="leftdiv">
                <div id="h3-div"><h3 id="sidetext">Acmy Solutions</h3></div>
                <div id="imahe-dash">
                 
                  <h4 id="h4-image-dash" ><img src={dash}/> Dashboard</h4>
                
                  </div>
              </div>
              
              <div id="rightdiv">
                  <div id="header"> 
                  <h1>Dashbord</h1>
                            
                  </div>
                  <div id="bannee">
                    <h1 className='bowns'>Welcome back, John Doe</h1> 
                      <h4 id="txthed">The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy. <br/><a id="anxer" href='#'>Look here for more information</a></h4>
                  
                  </div>
                  <div id="dta-div" className='clearfix'>
                    <div id="chiddiv">
                                    
                                    <div className="char-heda">
                                      <h3 className="piechar-title">Task</h3>
                                      <hr/>
                                      
                                      {

data.map((d)=>(
<tr>
  <td  id="feedback-div"> {d.todo}</td>
</tr>
 
 
))

}
                                      </div>


                    </div>
                    <div id="inside">
                                   <div id="feedback">
                                   <div className="char-heda">
                                      <h3 className="piechar-title">Activity Feed</h3>
                                      <hr/></div>
                                      
                                     
                                      {

                                        data.map((d)=>(
                                        <tr >
                                          <td id="feedback-div">{d.todo} {d.id}</td>
                                          <td id="feedback-div">{d.id}</td>
                                        </tr>
                                         
                                         
                                        ))
                                     
                                      }
                                     
                                      
                                      
                                      
                                      </div>
                                   <div id="chart" onClick={ chartstart}>
                                    <div className="char-heda">
                                      <h3 className="piechar-title">Task piority</h3>
                                      <hr/></div>
                                   
                                   <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          
          <Pie data={datas} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={110} outerRadius={190}  label />
        </PieChart>
      </ResponsiveContainer>
                                   
                                   
                                   </div>
                    </div>
                    
                  </div>
              </div>
           </div>
    </div>
  )
}

export default Dashborde