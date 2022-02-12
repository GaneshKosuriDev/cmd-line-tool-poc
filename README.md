### A Command line tool using Node JS which simplifies our day to day tasks

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`.
- Use the command `npm link` to symlink a package folder.
</details>

### Third-party libraries used

- Axios --> For Data fetching
- fs-extra --> for File operations


### Usage Documentation

- This CLI contains the list of Tasks as mentioned below

```json
[
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
]
```

- After you have successfully completed Setup by using Setup instructions, use below command to fetch a Task Specific Resource

```cmd
weekend get ik-001 ganesh 
```

**Expected Output:**

- The Resource is fetched from the server and created a repo in the local machine.

### Errors

1. Using Wrong **Development Type**

```cmd
weekend download ik-001 ganesh
```

**Expected Output:**

- Development Type download not found

2. Using **Wrong Task id**

```cmd
weekend get ik-100 ganesh
```

**Expected Output:**

- Task id with ik-100 not found

3. Using **Invalid Developer**

```cmd
weekend get ik-001 chinmaya
```

**Expected Output:**

- chinmaya is not a developer with task id ik-001

