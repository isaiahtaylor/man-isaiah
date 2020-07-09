import React from 'react';
import Line from './line';
import TriLine from './triLine';
import HeaderLine from './headerLine';
import IndentedLine from './indentedLine';
import IndentedImage from './indentedImage';
import { S3_MANUAL_PREFIX } from '../constants';

const IL = IndentedLine;

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
  <IL ><b>Isaiah Taylor</b> -- a software engineer</IL>,
  <Line />,
  <HeaderLine>SYNOPSIS</HeaderLine>,
  <IL><b>#include &lt;salary.h&gt;</b></IL>,
  <Line />,
  <IL><u>quality_software</u></IL>,
  <IL><b>isaiah_taylor</b>(<u>int</u> <u>pizza_slices</u>, <u>int</u> <u>coffee_cups</u>);</IL>,
  <Line />,
  <HeaderLine>DESCRIPTION</HeaderLine>,
  <IL>Hi, I'm Isaiah Taylor, a software engineer living in North Idaho.</IL>,
  <Line />,
  <IndentedImage width={200} src={`${S3_MANUAL_PREFIX}profile-test-50.jpg`}></IndentedImage>,
  <Line />,
  <IL>Here you will find some information about myself and my work,</IL>,
  <IL>laid out in the format of a <a href="https://en.wikipedia.org/wiki/Man_page">man page</a>. If you don't already know,</IL>,
  <IL><b>arrow keys</b> or <b>j</b> and <b>k</b> are used to navigate. You can also press <b>q</b></IL>,
  <IL>to quit the man page and get back to the main shell. To see a full</IL>,
  <IL>list of supported commands, <b>q</b>uit back to the shell and type <b>help</b>.</IL>,
  <Line />,
  <HeaderLine>ABOUT ME</HeaderLine>,
  <IL>As far back as I can remember, I have always had a passion to create.</IL>,
  <IL>Creation and invention drove me to build things with legos, and</IL>,
  <IL>query my family members for any unused "technology" that I could</IL>,
  <IL>disassemble and assemble again. Hours and hours of my childhood were</IL>,
  <IL>spent riding my bike around my neighborhood in search of discarded</IL>,
  <IL>remotes, light bulbs, or absolutely anything else with a circuit</IL>,
  <IL>board. As I grew I only became more driven to understand this</IL>,
  <IL>brilliant and confusing world of eletrical logic, so that by the</IL>,
  <IL>time I was 11, the majority of my time was spent on reading the C#</IL>,
  <IL>manual I had found on my dad's shelf and hacking out little programs</IL>,
  <IL>in the kid-focused Visual Basic variant, Phrogram. I was <i>hooked.</i></IL>,
  <IL></IL>,
  <IL>Since that time, it has just been one project after the next, each one</IL>,
  <IL>deepening my understanding and broadening my grasp of the technical</IL>,
  <IL>ecosystem. But a few things have stood out for me in my career so far,</IL>,
  <IL>as constructs, methodologies, and technologies that have come to be</IL>,
  <IL>my favorites. <b>First</b>, the operating system that Dennis Ritchie and his</IL>,
  <IL>associates built has been a great inspiration to me. The Unix </IL>,
  <IL>Philosophy's insistence on small, single-tools that could be chained</IL>,
  <IL>together absolutely changed the world forever. This website is a</IL>,
  <IL>tribute to it. <b>Second</b>, Java's approach to object orientation is to me</IL>,
  <IL>the greatest expression of platonic forms that has yet been</IL>,
  <IL>implemented. It represents unbridled abstraction, second only to the </IL>,
  <IL>pure abstraction afforded by neural networks. <b>Third</b> and finally,</IL>,
  <IL>neural networks, the idea that abstractions can be made on a physical</IL>,
  <IL>level and stacked infinitely, have been constant source of inspiration</IL>,
  <IL>and motivation for me. I have read a written about them, as well as</IL>,
  <IL>made an open source module for their creation in <b>Node.js</b>, which</IL>,
  <IL>you can install anywhere with <b>npm install guster</b>.</IL>,
  <IL></IL>,
  <IL>I am passionate and excited about so many things in the tech world,</IL>,
  <IL>but hopefully these things have given you a glimpse into the type of</IL>,
  <IL>things that drive me.</IL>,
  <Line />,
  <HeaderLine>WORK EXPERIENCE</HeaderLine>,
  <IL>In 2014, I created Taylor Technical Consulting to leverage my skills</IL>,
  <IL>against market needs. Since that time, I have been able to consult</IL>,
  <IL>in several different arenas of technology, as well as help to bring</IL>,
  <IL>a couple fantastic products to market.</IL>,
  <IL></IL>,
  <IL>Early in 2016, I came on with <a href="https://www.pdpglobal.com/">PDP Global</a> to consult in the complete</IL>,
  <IL>rewrite of their product from an outdated LAMP stack to a new and</IL>,
  <IL>breathtakingly fast <b>Node.js</b> and <b>React</b> lineup. My colleagues and I</IL>,
  <IL>were able to orchestrate the production of a platform from scratch</IL>,
  <IL>while maintaining the old one, and then seamlessly transition</IL>,
  <IL>customers to the new platform. I'm very proud of the work we did there</IL>,
  <IL>to revitalize a very good product. During my two and a half years at</IL>,
  <IL>PDP, I was responsible for creation and testing of REST APIs that</IL>,
  <IL>talked to several different backend technologies, including </IL>,
  <IL><b>PostgreSQL</b>, <b>MongoDB</b>, and <b>AWS Lambda</b>.</IL>,
  <IL></IL>,
  <IL>Following a very successful deployment of our PDP rewrite, I came on</IL>,
  <IL>at <a href="https://www.netscout.com/">Netscout</a>, a network security and monitoring company based in</IL>,
  <IL>Colorado Springs. My partnership with Netscout involved a wide range</IL>,
  <IL>of technologies and responsibilities. At Netscout, I worked with the</IL>,
  <IL>US Department of Defense, US Navy, Defense Information Security Agency,</IL>,
  <IL>Denver International Airport, Charter (Spectrum), Siemens,</IL>,
  <IL>PricewaterhouseCoopers, KC Southern and others to provide KPIs on</IL>,
  <IL>critical systems. I drew on my technical experience with distributed</IL>,
  <IL>embedded Linux, CI/CD, and containerization to provide custom KPI</IL>,
  <IL>solutions and had a lot of fun doing it!</IL>,
  <IL></IL>,
  <IL>In late 2018, I came on as a <a href="https://en.wikipedia.org/wiki/Supercomputer">High Performance Computing</a> consultant at</IL>,
  <IL>Washington State University, working on their supercomputer, Aeolus.</IL>,
  <IL>My colleagues and I facilitate groundbreaking research there, as we</IL>,
  <IL>support NOAA in weather modeling and computation, and several other</IL>,
  <IL>research projects like the human genome and fluid dynamics. My work</IL>,
  <IL>on the HPC cluster at WSU includes a wide array of technologies,</IL>,
  <IL>including: <b>ASM, C, C++, gdb, Python, R, Perl, Go, Ansible, Jenkins</b>,</IL>,
  <IL><b>Docker, RHEL, CentOS, Fedora, Debian, LDAP, AD, SQL, no-SQL, Unix</b>,</IL>,
  <IL>and many others.</IL>,
  <Line />,
  <HeaderLine>PORTFOLIO</HeaderLine>,
  <IL><a href="https://tapnoble.com">Tapnoble</a> is a chatting application I created to demonstrate the</IL>,
  <IL>non-blocking IO power of Node.js. The goal of this project was to</IL>,
  <IL>create a feed-subscription chatting application that was as</IL>,
  <IL>lightweight as possible and could handle millions of chats a second</IL>,
  <IL>with ease. Chat transmissions take as low as 2 milliseconds and can</IL>,
  <IL>handle multiple content types. To achieve this, I designed a data</IL>,
  <IL>hierarchy that allows the entire system to be held in memory for a</IL>,
  <IL>certain amount of time. The result is a highly agnostic, flexible, and</IL>,
  <IL>lightweight chatting platform that, thanks to the non-blocking</IL>,
  <IL>architecture of node, can handle massive amounts of use cheaply and</IL>,
  <IL>quickly. Tapnoble is always live and secure. Feel free to use it</IL>,
  <IL>yourself!</IL>,
  <IL></IL>,
  <IL>The website you are currently on is a tribute to Unix-style shell and</IL>,
  <IL>man pages, or Manual Pages. It is implemented entirely in <b>React.js</b>.</IL>,
  <IL>Take a look around and experiment with the shell; it was a lot of fun</IL>,
  <IL>to build, and really shows the incredible scaling power of React.</IL>,
  <IL></IL>,
  <IL><a href="https://github.com/iptaylortechnical/ThirteenFifty">ThirteenFifty</a> is a TFTP client I created in C. It can be used as a</IL>,
  <IL>Unix-style tool, or imported as a library. The name comes from the RFC</IL>,
  <IL>that defines the Trivial File Transfer Protocol, <a href="https://tools.ietf.org/html/rfc1350">RFC 1350</a>. TFTP is an</IL>,
  <IL>older version of FTP, and is still used in embedded applications like</IL>,
  <IL>routers, and used to deliver firmware and configuration in a trivial</IL>,
  <IL>setting. You can try it out for yourself by simply running make and</IL>,
  <IL>pointing it toward a TFTP server.</IL>,
  <IL></IL>,
  <IL><a href="https://www.npmjs.com/package/guster">Guster</a> is an npm library I made to make it easy to implement neural</IL>,
  <IL>networks in Node.js. Its simple syntax but infinite scalability is the</IL>,
  <IL>reason it is used in several hundred projects involving machine</IL>,
  <IL>learning.</IL>,
  <IL></IL>,
  <IL>This is a small sampling of my open source work. To request more</IL>,
  <IL>information about what I have done commercially or on proprietary</IL>,
  <IL>projects, feel free to contact me: isaiah.p.taylor@gmail.com .</IL>,
  <Line />,
  <HeaderLine>INTERESTS</HeaderLine>,
  <IL>When I am not working, most of my time is spent reading, writing, or</IL>,
  <IL>flying. You can follow my flying adventures at @flightsaboveidaho on</IL>,
  <IL>Instagram.</IL>,
  <IL></IL>,
  <Line />,
  <HeaderLine>THANK YOU</HeaderLine>,
  <IL>For your consideration. To contact me, send me an email <a href="mailto:isaiah.p.taylor@gmail.com">here</a>.</IL>,
  <IL></IL>,
  <IL></IL>,
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