document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const userName = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgress = document.querySelector(".easy-progress");
  const mediumProgress = document.querySelector(".medium-progress");
  const hardProgress = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.getElementById("stats-card");

  function validateUser(username) {
    if (username.trim() === "") {
      alert("Username shouldn't be empty.");
      return false;
    }
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    const isMatch = regex.test(username);
    if (!isMatch) {
      alert("Invalid username.");
    }
    return isMatch;
  }

  async function fetchUserDetails(username) {
    try {
      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
      const url = "https://leetcode.com/graphql/";
      const myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");

      const graphql = JSON.stringify({
        query: `
          query userProfile($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `,
        variables: { username: `${username}` },
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };
      const response = await fetch(proxyUrl + url, requestOptions);
      if (!response.ok) {
        throw new Error("Unable to fetch the User details.");
      }
      const parsedData = await response.json();
      console.log("Logging data:", parsedData);

      displayUserData(parsedData);
    } catch (error) {
      statsContainer.innerHTML = "<p>No Data Found!</p>";
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress-degree", `${progressDegree}`);
    label.textContent = `${solved} / ${total}`;
  }

  function displayUserData(parsedData) {
    const totalQues = parsedData.data.allQuestionsCount[0].count;
    const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
    const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
    const totalHardQues = parsedData.data.allQuestionsCount[3].count;

    const solvedTotalQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const solvedTotalEasyQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const solvedTotalMediumQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const solvedTotalHardQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

    updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgress);
    updateProgress(
      solvedTotalMediumQues,
      totalMediumQues,
      mediumLabel,
      mediumProgress
    );
    updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgress);
  }

  searchButton.addEventListener("click", function () {
    const username = userName.value;
    console.log("Login username:", username);
    if (validateUser(username)) {
      fetchUserDetails(username);
    }
  });
});
