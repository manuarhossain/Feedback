// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 3, 9, 11
    let group2Score = 0; // For questions 8, 10, 12
    let group3Score = 0; // For questions 2, 5, 14
    let group4Score = 0; // For questions 1, 6, 13
    let group5Score = 0; // For questions 4, 7, 15

    const group1Questions = [3, 9, 11];
    const group2Questions = [8, 10, 12];
    const group3Questions = [2, 5, 14];
    const group4Questions = [1, 6, 13];
    const group5Questions = [4, 7, 15];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 34) {
        comment = "Your feedback is not always clear, which means that people may not act on it. They may not understand what they need to change, or why. When you give feedback, prepare for the session carefully, and comment clearly on recent situations where a behavior or action has had a negative impact. State your case assertively, and outline the consequences of not acting on the feedback.";
    } else if (totalScore <= 55) {
        comment = "Sometimes people heed your feedback, but others may question it or follow it inconsistently. Use the Situation – Behavior – Impact Tool to give structured feedback, and suggest that your team member uses the Feedback Matrix to reflect on your comments. Offer regular opportunities to discuss feedback, and check that it's been understood. Don't forget to give praise as well. ";
    } else if (totalScore <= 75) {
        comment = "People listen to your feedback, and act on it. They value your comments because they know that you've taken time to think about them. Your team members act on your comments, and grow personally and professionally as a result.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "The best feedback is what we don't want to hear.<br><br>";

    resultsDiv.innerHTML += `Preparing to Give Feedback: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Structuring Feedback, and Balancing Negative Feedback With Positive Interactions: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Using Feedback to Link Line Management With Strategic Management: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Placing Feedback In Context: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Following Up Feedback, and Performance Management: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

