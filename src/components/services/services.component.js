import './services.styles.scss'
import './service.component'

import Service1Icon from "../../assets/circles-lines-lattice-b.svg";
import Service2Icon from "../../assets/circle-square-triangle-lines-rhombus.svg";
import Service3Icon from "../../assets/pattern-circles-d.svg";
import Service4Icon from "../../assets/tile-squares-circles.svg";
import Service from "./service.component";

const Services = () => {
    return (
        <div className="services">
            <Service service={{
                className: 'icon',
                imgSrc: Service1Icon,
                iconClass: 'img',
                serviceText: 'Service name',
                textClass: 'service-text'
            }}/>
            <Service service={{
                className: 'icon',
                imgSrc: Service2Icon,
                iconClass: 'img',
                serviceText: 'Service name',
                textClass: 'service-text'
            }}/>
            <Service service={{
                className: 'icon',
                imgSrc: Service3Icon,
                iconClass: 'img',
                serviceText: 'Service name',
                textClass: 'service-text'
            }}/>
            <Service service={{
                className: 'icon',
                imgSrc: Service4Icon,
                iconClass: 'img',
                serviceText: 'Service name',
                textClass: 'service-text'
            }}/>
        </div>
    )
}

export default Services