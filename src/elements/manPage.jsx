import React from 'react';
import Line from './line';
import TriLine from './triLine';
import HeaderLine from './headerLine';
import IndentedLine from './indentedLine';
import IndentedImage from './indentedImage';
import Profile1 from '../profile_1.jpg';

const elements = [
  <Line />,
  <TriLine
    first={
      'ISAIAH TAYLOR(1)'
    }
    second={
      'Human Manual Page'
    }
    third={
      'ISAIAH TAYLOR(1)'
    }
  />,
  <Line />,
  <HeaderLine >NAME</HeaderLine>,
  <IndentedLine ><b>Isaiah Taylor</b> -- a software engineer</IndentedLine>,
  <Line />,
  <HeaderLine>SYNOPSIS</HeaderLine>,
  <IndentedLine><b>#include &lt;salary.h&gt;</b></IndentedLine>,
  <Line />,
  <IndentedLine><u>quality_software</u></IndentedLine>,
  <IndentedLine><b>isaiah_taylor</b>(<u>int</u> <u>pizza_slices</u>, <u>int</u> <u>coffee_cups</u>);</IndentedLine>,
  <Line />,
  <HeaderLine>DESCRIPTION</HeaderLine>,
  <IndentedLine>Hi, I'm Isaiah Taylor, a software engineer living in North Idaho.</IndentedLine>,
  <Line />,
  <IndentedImage width={200} src={Profile1}></IndentedImage>,
  <Line />,
  <IndentedLine>Here you will find some information about myself and my work,</IndentedLine>,
  <IndentedLine>laid out in the format of a <a href="https://en.wikipedia.org/wiki/Man_page">man page</a>. If you don't already know,</IndentedLine>,
  <IndentedLine><b>arrow keys</b> or <b>j</b> and <b>k</b> are used to navigate. You can also press <b>q</b></IndentedLine>,
  <IndentedLine>to quit the man page and get back to the main shell. To see a full</IndentedLine>,
  <IndentedLine>list of supported commands, <b>q</b>uit back to the shell and type <b>help</b>.</IndentedLine>,
  <Line />,
  <HeaderLine>ABOUT ME</HeaderLine>,
  <IndentedLine>As far back as I can remember, I have always had a passion to create.</IndentedLine>,
  <IndentedLine>Creation and invention drove me to build things with legos, and</IndentedLine>,
  <IndentedLine>query my family members for any unused "technology" that I could</IndentedLine>,
  <IndentedLine>disassemble and assemble again. Hours and hours of my childhood were</IndentedLine>,
  <IndentedLine>spent riding my bike around my neighborhood in search of discarded</IndentedLine>,
  <IndentedLine>remotes, light bulbs, or absolutely anything else with a circuit</IndentedLine>,
  <IndentedLine>board. As I grew I only became more driven to understand this</IndentedLine>,
  <IndentedLine>brilliant and confusing world of eletrical logic, so that by the</IndentedLine>,
  <IndentedLine>time I was 11, the majority of my time was spent on reading the C#</IndentedLine>,
  <IndentedLine>manual I had found on my dad's shelf and hacking out little programs</IndentedLine>,
  <IndentedLine>in the kid-focused Visual Basic variant, Phrogram. I was <i>hooked.</i></IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine>Since that time, it has just been one project after the next, each one</IndentedLine>,
  <IndentedLine>deepening my understanding and broadening my grasp of the technical</IndentedLine>,
  <IndentedLine>ecosystem. But a few things have stood out for me in my career so far,</IndentedLine>,
  <IndentedLine>as constructs, methodologies, and technologies that have come to be</IndentedLine>,
  <IndentedLine>my favorites. <b>First</b>, the operating system that Dennis Ritchie and his</IndentedLine>,
  <IndentedLine>associates built has been a great inspiration to me. The Unix </IndentedLine>,
  <IndentedLine>Philosophy's insistence on small, single-tools that could be chained</IndentedLine>,
  <IndentedLine>together absolutely changed the world forever. This website is a</IndentedLine>,
  <IndentedLine>tribute to it. <b>Second</b>, Java's approach to object orientation is to me</IndentedLine>,
  <IndentedLine>the greatest expression of platonic forms that has yet been</IndentedLine>,
  <IndentedLine>implemented. It represents unbridled abstraction, second only to the </IndentedLine>,
  <IndentedLine>pure abstraction afforded by neural networks. <b>Third</b> and finally,</IndentedLine>,
  <IndentedLine>neural networks, the idea that abstractions can be made on a physical</IndentedLine>,
  <IndentedLine>level and stacked infinitely, have been constant source of inspiration</IndentedLine>,
  <IndentedLine>and motivation for me. I have read a written about them, as well as</IndentedLine>,
  <IndentedLine>made an open source module for their creation in <b>Node.js</b>, which</IndentedLine>,
  <IndentedLine>you can install anywhere with <b>npm install guster</b>.</IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine>I am passionate and excited about so many things in the tech world,</IndentedLine>,
  <IndentedLine>but hopefully these things have given you a glimpse into the type of</IndentedLine>,
  <IndentedLine>things that drive me.</IndentedLine>,
  <Line />,
  <HeaderLine>WORK EXPERIENCE</HeaderLine>,
  <IndentedLine>In 2014, I created Taylor Technical Consulting to leverage my skills</IndentedLine>,
  <IndentedLine>against market needs. Since that time, I have been able to consult</IndentedLine>,
  <IndentedLine>in several different arenas of technology, as well as help to bring</IndentedLine>,
  <IndentedLine>a couple fantastic products to market.</IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine>Early in 2016, I came on with <a href="https://www.pdpglobal.com/">PDP Global</a> to consult in the complete</IndentedLine>,
  <IndentedLine>rewrite of their product from an outdated LAMP stack to a new and</IndentedLine>,
  <IndentedLine>breathtakingly fast <b>Node.js</b> and <b>React</b> lineup. My colleagues and I</IndentedLine>,
  <IndentedLine>were able to orchestrate the production of a platform from scratch</IndentedLine>,
  <IndentedLine>while maintaining the old one, and then seamlessly transition</IndentedLine>,
  <IndentedLine>customers to the new platform. I'm very proud of the work we did there</IndentedLine>,
  <IndentedLine>to revitalize a very good product. During my two and a half years at</IndentedLine>,
  <IndentedLine>PDP, I was responsible for creation and testing of REST APIs that</IndentedLine>,
  <IndentedLine>talked to several different backend technologies, including </IndentedLine>,
  <IndentedLine><b>PostgreSQL</b>, <b>MongoDB</b>, and <b>AWS Lambda</b>.</IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine>Following a very sucessful deployment of our PDP rewrite, I came on</IndentedLine>,
  <IndentedLine>at <a href="https://www.netscout.com/">Netscout</a>, a network security and monitoring company based in</IndentedLine>,
  <IndentedLine>Colorado Springs. My partnership with Netscout involved a wide range</IndentedLine>,
  <IndentedLine>of technologies and responsibilities. I utilized my talents with <b>Linux</b></IndentedLine>,
  <IndentedLine>and <b>embedded systems</b> to solve specific customer network security needs</IndentedLine>,
  <IndentedLine>using <b>C</b> and <b>Python</b>. Other technologies that I used at Netscout:</IndentedLine>,
  <IndentedLine><b>Jenkins</b>, <b>Docker</b>, <b>MongoDB</b>, <b>Cassandra</b>, <b>Node.js</b>, <b>Angular</b>, and <b>Hyper-V</b>.</IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine>In late 2018, I came on as a <a href="https://en.wikipedia.org/wiki/Supercomputer">High Performance Computing</a> consultant at</IndentedLine>,
  <IndentedLine>Washington State University, working on their supercomputer, Aeolus.</IndentedLine>,
  <IndentedLine>My colleagues and I facilitate groundbreaking research there, as we</IndentedLine>,
  <IndentedLine>support NOAA in weather modeling and computation, and several other</IndentedLine>,
  <IndentedLine>research projects like the human genome and fluid dynamics. My work</IndentedLine>,
  <IndentedLine>on the HPC cluster at WSU includes a wide array of technologies,</IndentedLine>,
  <IndentedLine>including: <b>ASM, C, C++, gdb, Python, R, Perl, Go, Ansible, Jenkins</b>,</IndentedLine>,
  <IndentedLine><b>Docker, RHEL, CentOS, Fedora, Debian, LDAP, AD, SQL, no-SQL, Unix</b>,</IndentedLine>,
  <IndentedLine>and many others.</IndentedLine>,
  <Line />,
  <HeaderLine>PORTFOLIO</HeaderLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,
  <IndentedLine></IndentedLine>,
]

class ManPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.elementCountCallback(elements.length);
  }

  render() {

    const { scrollIndex } = this.props;
    const renderElements = elements.slice(scrollIndex);

    return (
      <span>
        <Line absolute={true}
          main={
            <span>:<span className="control-cursor">a</span></span>
          }
        />
        {renderElements.map((element, i) => <span key={i}>{element}</span>)}
      </span>
    )
  }
}

export default ManPage;