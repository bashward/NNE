import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timeline = () => {

return (
    <>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="1997"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title"> FOUNDED BY VIRENDER SINGH AND NARESH THAKUR IN OKHLA, PRODUCTION OF TV INDUSTRY COMPONENTS</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2001"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">STARTED MASS PRODUCTION OF CFL INDUCTOR COMPONENTS</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">SHIFTED TO NEW UNIT IN OKHLA</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">CROSSED 1 MILLION COMPONENTS PRODUCTION THRESHOLD</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2015"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">STARTED PRODUCTION OF LED LIGHTS COMPONENTS</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">SHIFTED TO NEW UNIT IN GURUGRAM</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">NEW PRODUCTION LINE SET UP FOR LAMINATION TRANSFORMER UPTO 5KVA</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">NEW PRODUCTION LINE SET UP FOR EV CHARGERS AND SOLAR INVERTERS.</h3>
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">CROSSED NEW THRESHOLD FOR 3 MILLION COMPONENTS</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">SET UP NEW UNIT IN HIMACHAL</h3>
  </VerticalTimelineElement>
</VerticalTimeline>
    </>

)

}

export default timeline