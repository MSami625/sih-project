
import React,{Component} from "react";


class Accordion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        accordionItems: [],
      };
    }
  
    componentDidMount() {
      const accordion = data.map((item) => ({
        title: item.title,
        content: item.content,
        open: false,
      }));
  
      this.setState({
        accordionItems: accordion,
      });
    }
  
    click(item) {
      const newAccordion = this.state.accordionItems.slice();
      const index = newAccordion.indexOf(item);
      newAccordion[index].open = !newAccordion[index].open;
      this.setState({ accordionItems: newAccordion });
    }
  
    render() {
      return (
        <div className="accordion">
          {this.state.accordionItems.map((item, index) => (
            <div key={index}>
              <div className="title" onClick={() => this.click(item)}>
                <div className="arrow-wrapper">
                  <span className="arrow-text">{item.open ? "-" : "+"}</span>
                </div>
                <span className="title-text">{item.title}</span>
              </div>
              <div className={item.open ? "content content-open" : "content"}>
                <div
                  className={
                    item.open ? "content-text content-text-open" : "content-text"
                  }
                >
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
  



      const data = [
        {
          title: "How is Heamen beneficial for children?",
          content: `The Heamen is beneficial for children in various ways. As it helps allows them a free space to be themselves and let their intrusive and creative thoughts out. It tracks the behaviour of your child and further evaluates how in sync that behaviour is with the societal norms. It also Analysis the emotional intelligence, prosocial level, behavioural characteristic, and more of such traits of your child. 
          `, // Add your content here
        },
        {
          title: "Can a child’s temperament affect one’s adult behaviour? ",
          content: `Yes, a child’s temperament, like being easygoing or spirited, plays a significant role in their behavior. Easy-going children may adapt well, while spirited ones may display more intense reactions.
          `, // Add your content here
        },
        {
          title:
            "Is Heamen designed only for children or can it be played by adults as well?",
          content: `Yes, this game can be played by young adults as well. Though in that case, we cannot be sure about the reliability of the analysis report, as adults are seen to be more smart and thoughtful with their answers. While children are observed to be immersed in the game and let their subconscious behavioural pattern select the answers for them.
          `, // Add your content here
        },
        
        {
          title: "How do parents and caregivers recognize their child’s personality traits?",
          content: `Observing how a child reacts to various situations, their preferences, and their social interactions can help parents identify their child’s personality traits.
          `, // Add your content here
        },
        {
          title: "Can a child’s behavior change over time as their personality develops?",
          content: `Yes, a child’s behavior can evolve as they grow and develop. New experiences and influences can modify their behavioral choices.
          `, // Add your content here
        },
        {
          title: "What role does environment play in a child’s behavior?",
          content: `The child’s environment, including family, school, and peers, can influence their behavior. It can either support or challenge their natural personality traits.
          `, // Add your content here
        },
        {
          title: "How can parents nurture positive behaviors in their child based on their personality?",
          content: `By understanding their child’s personality, parents can tailor their guidance and support to encourage positive behaviors that align with their traits.
          `, // Add your content here
        },
        {
          title: "Can awareness of a child’s personality traits help prevent behavioral issues?",
          content: `Yes, understanding a child’s personality can help parents address potential behavioral challenges early and provide appropriate guidance.
          `, // Add your content here
        }
      ];


      export default Accordion;