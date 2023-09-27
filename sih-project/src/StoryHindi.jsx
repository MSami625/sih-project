
import "./story.css";

import React, { useState, useEffect,useRef } from "react";


function StoryHindi(){
    
  const [secondsLeft, setSecondsLeft] = useState(10); // Set the initial countdown time
  const [scrollToTarget, setScrollToTarget] = useState(false);

  const [text,settext]=useState("");
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timerInterval);
        setScrollToTarget(true);
      }
    }, 1900);

    return () => clearInterval(timerInterval);
  }, [secondsLeft]);

  useEffect(() => {
    if (scrollToTarget) {
      const targetElement = document.getElementById("scroll");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToTarget, "scroll"]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef(null);
  const [name,setName]=useState("");



  const questions = [
    {
      src: "https://ik.imagekit.io/wellnesswards/scene1h.mp4?updatedAt=1695782846749",
      text: "श्रेया क्या करेगी?",
      options: [
        {
          id: 0,
          text: "1. वह बिल्ली की मदद करने के बारे में सोचती है लेकिन वह सज़ा नहीं पाना चाहती।",
        },
        { id: 1, text: "2. वह चली जाती है." },
        { id: 2, text: "3. वह बिल्ली की मदद करती है और इस तरह स्कूल के लिए देर हो जाती है।" },
        { id: 3, text: "4. वह मदद के लिए किसी और को बुलाती है." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/scene2.mp4?updatedAt=1695782492720",
      text: "Q. श्रेया को क्या करना चाहिए?",
      options: [
        {
          id: 0,
          text: "1. वह बहुत भूखी है और अपना दोपहर का भोजन साझा नहीं करना चाहती।",
        },
        { id: 1, text: "2. वह अपने दोस्तों से अपना दोपहर का भोजन साझा करने के लिए कहती है।" },
        { id: 2, text: "3. वह अपना दोपहर का भोजन साझा करती है।" },
        { id: 3, text: "4. वह अपने बेंच-मेट के लिए कुछ खरीदती है।" },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/scene3.mp4?updatedAt=1695782492794",
      text: "Q. श्रेया कैसे जवाब देंगी?",
      options: [
        { id: 0, text: "1. वह थकी हुई है और अकेली रहना चाहती है।" },
        { id: 1, text: "2. वह अपने दोस्तों पर उसके साथ जबरदस्ती करने के लिए चिल्लाती है।" },
        { id: 2, text: "3. वह अपने दोस्तों के साथ खो-खो खेलने के लिए सहमत हो जाती है।" },
        { id: 3, text: "4. वह अपने दोस्तों को नजरअंदाज करती है." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/scene4.mp4?updatedAt=1695782492315",
      text: "Q. श्रेया कैसे जवाब देंगी?",
      options: [
        { id: 0, text: "1.वह अपनी नोटबुक देने से इंकार कर देगी।" },
        {
          id: 1,
          text: "2.वह उसे नजरअंदाज कर देगी और नोटबुक को जांच के लिए जमा कर देगी।",
        },
        {
          id: 2,
          text: "3.वह उसे नोटबुक देगी और अपनी नोटबुक जल्दी वापस करने को कहेगी।",
        },
        {
          id: 3,
          text: "4.वह उसे डांटेगी और बाद में नोटबुक जमा कर देगी।",
        },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/scene5.mp4?updatedAt=1695782492644",
      text: "प्र. वह अपने सहपाठियों को अपने साथ आने के लिए कैसे कहेगी?",
      options: [
        { id: 0, text: "1.विनम्रतापूर्वक, वह अपने सभी दोस्तों से पूछेगी।" },
        { id: 1, text: "2.वह प्रत्येक मित्र को टीम में शामिल होने के लिए बाध्य करेगी।" },
        {
          id: 2,
          text: "3.वह अलग-अलग टीम बनाने को लेकर अपने दोस्तों से लड़ेगी।",
        },
        {
          id: 3,
          text: "4.वह टीचर से शिकायत करेगी और मदद मांगेगी।",
        },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/scene6.mp4?updatedAt=1695782492522",
      text: "प्र. क्या वह उस बीमार छात्र को सीट देगी?",
      options: [
        { id: 0, text: "1. हां " },
        { id: 1, text: "2. नहीं" },
      ],
    },
  ];

  const optionClicked = (id) => {
    // Increment the score
    if (videoEnded) {
    if (id === 0) {
      setScore(score + 1);
    } else if (id === 1) {
      setScore(score + 2);
    } else if (id === 2) {
      setScore(score + 3);
    } else if (id === 3){
      setScore(score + 4);
    }
console.log(score)
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setVideoEnded(false);
    } else {
        
      setShowResults(true);
    }}
  };


  useEffect(() => {
    if (showResults) {
      scores();
    }
  }, [showResults]);



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
     setName(items);
    }
  }, []);


  const scores=()=>{

  if(score>=15){
     settext("औसत स्कोर से ऊपर रिपोर्ट: बधाई हो! आपके परिणाम दर्शाते हैं कि आपके बच्चे का सामाजिक व्यवहार स्तर औसत से ऊपर है। इसका मतलब यह है कि आपका बच्चा लगातार दयालुता, सहानुभूति और दूसरों की मदद करने की इच्छा प्रदर्शित करता है। वे अपने आस-पास के लोगों की ज़रूरतों और भावनाओं के प्रति संवेदनशील होते हैं और अक्सर ऐसे व्यवहार में संलग्न होते हैं जो उनके सामाजिक संबंधों में सकारात्मक योगदान देते हैं। सहानुभूति और दयालुता की मजबूत भावना को बढ़ावा देने के लिए इन क्षेत्रों में उनके निरंतर विकास को प्रोत्साहित करें और समर्थन करें।")
  }else if(8>=score<15){
    settext("औसत स्कोर रिपोर्ट: आपके बच्चे के परिणाम औसत स्तर के सामाजिक व्यवहार का संकेत देते हैं। इससे पता चलता है कि वे कुछ सामाजिक व्यवहार प्रदर्शित करते हैं लेकिन कुछ क्षेत्रों में सुधार की गुंजाइश भी हो सकती है। उन्हें सहानुभूति, साझाकरण और सहयोग विकसित करने के अवसर प्रदान करते हुए उनके सकारात्मक व्यवहारों का पोषण और सुदृढ़ीकरण जारी रखना महत्वपूर्ण है। खुले संचार को प्रोत्साहित करना और उन्हें दूसरों की मदद करने का मूल्य सिखाना उनके चल रहे सामाजिक और भावनात्मक विकास में सहायता कर सकता है।")
  }else if(score<8){
    settext("औसत स्कोर से नीचे रिपोर्ट: अरे! आपके बच्चे के सामाजिक स्तर के मूल्यांकन के साथ, हम विश्लेषण करते हैं कि यह औसत से नीचे है। यह इंगित करता है कि आपके बच्चे में सहानुभूति, दयालुता, सहयोग की भावना और दूसरों की भावनाओं को समझने का स्तर तुलनात्मक रूप से कम है। इस व्यवहार के कारण सकारात्मक संबंध बनाने, धमकाने या आक्रामक व्यवहार, अलगाव या अकेलापन, आत्म-केंद्रितता आदि में कठिनाई हो सकती है। लेकिन चिंता की कोई बात नहीं है क्योंकि उचित मार्गदर्शन और समर्थन से हम आपको साझाकरण, सहानुभूति और सहयोग जैसे व्यवहार विकसित करके सामाजिक व्यवहार विकसित करने में मदद कर सकते हैं। सकारात्मक सुदृढीकरण, मॉडलिंग और दूसरों के प्रति दयालुता और विचारशीलता का अभ्यास करने के अवसरों के माध्यम से इन कौशलों को विकसित करने के लिए अपने बच्चे के साथ काम करना आवश्यक है।")
  }
}





useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        setVideoEnded(true);
      });
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", () => {
          setVideoEnded(true);
        });
      }
    };
  }, []);

  return (
    <>
      <div className="question-card">
        {/* Current Question  */}

        <div className="story-video">
          <video
          ref={videoRef}
            autoPlay
            width={900}
            controls
            controlsList="nodownload"
            src={questions[currentQuestion].src}
          ></video>
        </div>

        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        {/* List of possible answers  */}
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
                <li
                key={option.id}
                onClick={() => optionClicked(option.id)}
                className={videoEnded ? "" : "disabled"} // Disable options if the video has not ended
              >
                {option.text}
              </li>

            );
          })}
          
        </ul>
      </div>
      <div id="scroll"></div>


      {showResults && (
      <div className="overlay"> {/* Apply the overlay class */}
        <div className="final-results">
          {/* Your modal content */}
          <h1>Wohoo {name.name}! आपने कहानी पूरी कर ली😘</h1>
          <h3>अभिभावक/माता-पिता के लिए:</h3>
          <p>{text}</p>
         
          <a href="/">मुखपृष्ठ पर वापस</a>
      
        </div>
        
      </div>
    )}
     
    </>

    );
}

export default StoryHindi;