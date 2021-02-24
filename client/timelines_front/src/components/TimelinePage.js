import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimelinePage = ({events}) => {
    
    // TODO styles for battle event and non-battle-evetn, can be done in TimelinePage.css
  

    return (
        <>
        <h1>Timeline</h1>
            <VerticalTimeline>
            {events.map(event => {
                // let isBattleIcon = event.type ===="work";
                // conditional logic for hasPersonList to see if the event has a list of person to then
                // make the list of people button show up
                return(
                    <VerticalTimelineElement
                        key={event.key}
                        date={event.date}
                        dateClassName="date"
                        // iconStyle={isBattleIcon ? battleIconStyle : non-battleIconStyle}
                        // icon={isBattleIcon ? <BattleIcon/> :<non-battleIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">{event.name}</h3>
                        {/* <h5 className="vertical-timeline-element-subtitle">{event.location}</h5> */}
                        <p id="description">{event.description}</p>
                        <button>People</button> 
                        {/* this should have a popup for a list of people at the event */}
                    </VerticalTimelineElement>
                    );
                })
            }
            </VerticalTimeline>
        </>
    )
}

export default TimelinePage;