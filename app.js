import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon} from 'semantic-ui-react'



class Subs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      log: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState({
      log:e.target.value
    })
  }
  render(){
    return (
  <div className='sub'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }`
    }</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center' >
          COMMING SOON
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.handleClick}
            />
            <Button animated ='fade' color='red' onClick={this.handleClick}>
     <Button.Content visible>Subscribe</Button.Content>
     <Button.Content hidden>
       <Icon name='feed' />
     </Button.Content>
   </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
}}
ReactDOM.render(<Subs />,document.getElementById('root'))
export default Subs
