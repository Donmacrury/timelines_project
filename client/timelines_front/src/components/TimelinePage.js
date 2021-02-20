import Event from './Event';

// TODO: npm i react-verticle_timeline
// import verticle timeline, vertical timeline element, vertical timeline style.min.css


const TimelinePage = ({event}) => {
    
    cosnt [timelineEvents, setTimelineEvents] = useState(null)

    // TODO styles for battle event and non-battle-evetn, can be done in TimelinePage.css

    return (
        <>
            {/* <VerticalTimeline>
            {timelineEvents.map(event => {
                let isBattleIcon - event.type ===="work";

                return(
                    <VerticalTimelineElement
                    ket={event.key}
                    date={event.date}
                    dateClassName="date"
                    iconStyle={isBattleIcon ? battleIconStyle : non-battleIconStyle}
                    icon={isBattleIcon ? <BattleIcon/> :<non-battleIcon/>}
                    >
                    <h3 className="eventName">{event.name}</h3>
                    <h5 className="eventLocation">{event.location}</h5>
                    <p id="description">{event.description}</p>
                    <button>People</button> this should have a popup for a list of people at the event
                    </VerticleTimelineElement>
                );
            })}
            </VerticalTimeline>*/}
        </>
    )
}