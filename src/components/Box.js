import React  from 'react';

class Box extends React.Component {
    
    render() { 
        return ( 
            <div className="box col-sm-3 col-6">
                {/* <span class="material-icons"> */}
                <span class="material-icons" style={{color: this.props.color}}>
                    {this.props.icon}
                </span>
                    <p>
                        {this.props.title}
                    
                    </p>
                    <p>
                        {this.props.value}
                    
                    </p>
                    <p>
                        {this.props.unit}
                    
                    </p>
            </div>
         );
    }
}
 
export default Box;