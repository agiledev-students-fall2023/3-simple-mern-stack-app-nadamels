import { Link } from 'react-router-dom'
import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const About = props => {
  return (
<div>
      <p style={{ color: 'white' }}>
        My name is Nada Elsharkawy
      </p>
      <p style={{ color: 'white' }}>
        Sometimes, I am curious about what I can do with myself so I keep on going.
      </p>
      <p style={{ color: 'white' }}>
        But often times I just want to sleep
      </p>
      <p style={{ color: 'white' }}>
        I like Capybaras.
      </p>
      <p style={{ color: 'white' }}>
        My favorite shape is an equilateral triangle. I love ASD.
      </p>
      <br />
      <p>
        <br />
      </p>
      <img
        src="https://d2zia2w5autnlg.cloudfront.net/263/6032ee3470fda-large"
        alt="Kirb"
      />
</div>
  );
};
export default About;
