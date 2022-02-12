const fs = require("fs-extra");
const axios = require("axios");

exports.myCommandLineTool = myCommandLine;

const cliTaskIdsWithDevelopers = [
  {
    task_id: "ik-001",
    developer: "ganesh",
    reviewer: "rahul",
  },
  {
    task_id: "ik-002",
    developer: "rahul",
    reviewer: "ganesh",
  },
  {
    task_id: "ik-003",
    developer: "vinod",
    reviewer: "pushpa",
  },
  {
    task_id: "ik-004",
    developer: "surya",
    reviewer: "pavan",
  },
  {
    task_id: "ik-005",
    developer: "preethi",
    reviewer: "dinesh",
  },
  {
    task_id: "ik-006",
    developer: "pavan",
    reviewer: "varakumar",
  },
];

const developmentTypes = ["get", "review", "submit", "submit_review"];

const isWrongDevelopmentType = (developmentType) => {
  const index = developmentTypes.findIndex(
    (devType) => devType === developmentType
  );
  return index === -1;
};

const isWrongTaskId = (taskId) => {
  const index = cliTaskIdsWithDevelopers.findIndex(
    (eachTask) => eachTask.task_id === taskId
  );
  return index === -1;
};

const isWrongDeveloper = (taskId, developer) => {
  const index = cliTaskIdsWithDevelopers.findIndex(
    (taskDetails) => taskDetails.task_id === taskId
  );
  const taskDetails = cliTaskIdsWithDevelopers[index];
  return developer !== taskDetails.developer;
};

const isWrongCommand = (arguments) => {
  const [
    first,
    second,
    developmentType = "",
    codingPracticeId = "",
    developer = "",
  ] = arguments;

  let result = {
    isFailed: false,
    message: "",
  };

  if (isWrongDevelopmentType(developmentType)) {
    return {
      isFailed: true,
      message: `Development Type ${developmentType} not found`,
    };
  } else if (isWrongTaskId(codingPracticeId)) {
    return {
      isFailed: true,
      message: `Task id with ${codingPracticeId} not found`,
    };
  } else if (isWrongDeveloper(codingPracticeId, developer)) {
    return {
      isFailed: true,
      message: `${developer} is not a developer with task id ${codingPracticeId}`,
    };
  }
  return result;
};

function getData(codingPracticeId) {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      const path = `./workspace/${codingPracticeId}-repo`;
      const updatedPath = `${path}/users.json`;
      console.log(`Created Workspace for: ${codingPracticeId} at ${path}`);
      fs.ensureFile(updatedPath).then(() => {
        fs.outputFile(updatedPath, JSON.stringify(response.data));
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function myCommandLine() {
  const [
    first,
    second,
    developmentType = "",
    codingPracticeId = "",
    developer = "",
  ] = process.argv;
  let command = `${developmentType} ${codingPracticeId} ${developer}`;
  const commandCheck = isWrongCommand(process.argv);

  if (commandCheck.isFailed) {
    console.log(`${commandCheck.message}`);
  } else {
    setTimeout(() => {
      console.log("Requesting server......");
    }, 1000);
    setTimeout(() => {
      console.log("Fetching Task Details......");
    }, 2000);
    setTimeout(() => {
      console.log(
        "Successfully connected to server!!!\nDownload completed!\nExtracted required assets!"
      );
      getData(codingPracticeId);
    }, 3000);
  }
}
