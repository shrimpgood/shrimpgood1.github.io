$(document).ready(function() {
    const questions = [
        {
            question: "吃香菜嗎？",
            imageUrl: "https://cdn.pixabay.com/photo/2017/01/09/11/33/smoothie-drink-1966284_640.jpg"
        },
        {
            question: "吃青蔥嗎？",
            imageUrl: "https://images.pexels.com/photos/12361992/pexels-photo-12361992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            question: "吃小黃瓜嗎？",
            imageUrl: "https://images.pexels.com/photos/8679633/pexels-photo-8679633.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            question: "吃茄子嗎？",
            imageUrl: "https://images.pexels.com/photos/5848475/pexels-photo-5848475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            question: "吃番茄嗎？",
            imageUrl: "https://images.pexels.com/photos/7223301/pexels-photo-7223301.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            question: "吃芋頭嗎？",
            imageUrl: "https://images.pexels.com/photos/5335709/pexels-photo-5335709.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            question: "吃苦瓜嗎？",
            imageUrl: "https://images.pexels.com/photos/11168354/pexels-photo-11168354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            question: "吃青椒嗎？",
            imageUrl: "https://images.pexels.com/photos/6653590/pexels-photo-6653590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            question: "吃鳳梨披薩嗎？",
            imageUrl: "https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            question: "喝杏仁茶嗎？",
            imageUrl: "https://images.pexels.com/photos/4187716/pexels-photo-4187716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];


    let currentQuestion = 0;
    let eatScore = 0;


    const questionText = $("#question-text");
    const eatButton = $("#eat-button");
    const notEatButton = $("#not-eat-button");
    const responseText = $("#response-text");
    const scoreText = $("#score-text");
    const commentText = $("#comment-text");
    const restartButton = $("#restart-button");
    const resultContainer = $("#result-container");


    function displayQuestion() {
        if (currentQuestion < questions.length) {
            questionText.text(questions[currentQuestion].question);
            const imageUrl = questions[currentQuestion].imageUrl;
            const questionImage = $("#question-image");
            questionImage.attr("src", imageUrl);
            eatButton.show();
            notEatButton.show();
            resultContainer.hide(); // 隱藏結果容器
        } else {
            calculateResult();
        }
    }


    function calculateResult() {
        let comment = "";
        if (eatScore == 10) {
            comment = "請注意您的身體健康！";
        } else if (eatScore >= 7) {
            comment = "至少還有可以吃的...";
        } else if (eatScore >= 5) {
            comment = "您是個正常人";
        } else if (eatScore >= 3) {
            comment = "您很健康。";
        } else if (eatScore >= 1) {
            comment = "這分數已經超越大部分的人了。";
        } else {
            comment = "真的有這種人存在?";
        }


        commentText.text("評語：" + comment);
        scoreText.text("挑食積分：" + eatScore);
        resultContainer.show();
        
        eatButton.hide();
        notEatButton.hide();
        
        restartButton.show();
    }


    function restartQuiz() {
        currentQuestion = 0;
        eatScore = 0;
        resultContainer.hide();
        restartButton.hide();
        displayQuestion();
    }


    notEatButton.click(function() {
        eatScore++;
        currentQuestion++;
        displayQuestion();
    });


    eatButton.click(function() {
        currentQuestion++;
        displayQuestion();
    });


    restartButton.click(restartQuiz);


    displayQuestion();


    // 添加滑鼠悬停效果
    $("#eat-button, #not-eat-button").hover(function() {
        // 當滑鼠進入按鈕時觸發的事件
        $(this).css("background-color", "#555");
        $(this).css("color", "#fff");
    }, function() {
        // 當滑鼠離開按鈕時觸發的事件
        $(this).css("background-color", ""); // 恢復原始背景顏色
        $(this).css("color", ""); // 恢復原始文字顏色
    });
});
