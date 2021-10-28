// Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
const data = [
      {
        "project": "Project X",
        "stack": ["react", "express", "node"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
        "needs": "People with super powers",
        "status": "In Development"
      },
      {
        "project": "Project XYZ",
        "stack": ["python", "django"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "needs": "People with super powers, semi-super powers, or no powers at all",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
        "status": "Live"
      },{
        "project": "Project X",
        "stack": ["react", "express", "node"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
        "needs": "People with super powers",
        "status": "In Development"
      },
      {
        "project": "Project XYZ",
        "stack": ["python", "django"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "needs": "People with super powers, semi-super powers, or no powers at all",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
        "status": "Live"
      },{
        "project": "Project X",
        "stack": ["react", "express", "node"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
        "needs": "People with super powers",
        "status": "In Development"
      },
      {
        "project": "Project XYZ",
        "stack": ["python", "django"],
        "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
        "website": "https://www.google.com",
        "github": "https://www.github.com",
        "needs": "People with super powers, semi-super powers, or no powers at all",
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
        "status": "Live"
      }
     ];
    
    function Layout(props){
      return(
          <div className="row">{props.children}</div>
        )
    }
     
    class Card extends React.Component {
      render(){
        const style = {
          img: {
            maxWidth: "400px"
          }
        }
        return(
          <div className="col m4">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img style={style.img} className="activator" src={this.props.data.image}/>
              </div>
              <div className="card-content">
                <div>
                  <StackIcons data={this.props.data.stack}/>
                </div>
                <span className="card-title activator grey-text text-darken-4">
                  {this.props.data.project}
                  <i className="material-icons right">more_vert</i>
                </span>
                <div>
                  <span><a href={this.props.data.website}>Website</a></span>
                  <span><a className="github" href={this.props.data.github}>Github</a></span>
                </div>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.data.project}<i className="material-icons right">close</i></span>
                <div><span className="status">{this.props.data.status}</span></div>
                <p>{this.props.data.description}</p>
                <p><strong>Need:</strong></p>
                <p>{this.props.data.needs}</p>
              </div>
            </div>
          </div>
        )
      }
    }
    
    // Note: Empty span tag on line 115 is there as placeholder for
    // the custom CSS to inject text based on stack item.
    function StackIcons(props) {
      const array = props.data;
      const icons = array.map((item) => {
        return (
          <div key={item} className="icon">
            <span className={item}><span/></span>
          </div>
        );
      });
      return(
        <div> {icons} </div>
      )
    }
    
    function Projects(props){
      const projects = [];
      const data = props.data;
      data.forEach((item) => { projects.push( <Card data={item} /> )});
      return(
        <div>{projects}</div>
      )
    }
    
    ReactDOM.render(
      <Layout children={<Projects data={data} />} />,
      document.getElementById('root')
    );