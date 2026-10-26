# Assignment 2: Git Branching and Collaboration

## 1. Repository Status Verification

The repository status and existing branches are checked before beginning the assignment.

```bash
git status
git branch
git remote -v
```

**Purpose:**
- `git status` displays the current working-tree status.
- `git branch` lists the local branches.
- `git remote -v` displays the configured remote repositories.

## 2. Synchronizing the Main Branch

The local main branch is updated with the latest changes from GitHub.

```bash
git switch main
git pull origin main
```

**Purpose:** Ensures that the local main branch contains the latest available changes from the remote repository.

## 3. Creating a Feature Branch

A separate branch is created for an improvement to the Student Task Manager application.

```bash
git switch -c feature-task-improvements
```

**Purpose:** Creates the `feature-task-improvements` branch and switches the working directory to it.

## 4. Implementing and Recording Changes

Make an actual improvement to the application, save the modified files, and inspect the changes.

```bash
git status
git add .
git commit -m "Improve student task management interface"
```

**Purpose:** Stages the changes and records them as a commit in the feature branch.

## 5. Publishing the Feature Branch

The feature branch is pushed to GitHub.

```bash
git push -u origin feature-task-improvements
```

**Purpose:** Publishes the branch to the remote repository so it can be accessed through GitHub.

## 6. Pull Request and Integration

Open the repository on GitHub and create a Pull Request from `feature-task-improvements` into `main`.

Review the changes and merge the Pull Request when ready. If working independently, document the process accurately without claiming another person's review or approval.

## 7. Synchronizing After the Merge

After the feature branch has been merged into `main`, update the local repository.

```bash
git switch main
git pull origin main
```

**Purpose:** Updates the local main branch with the merged changes.

## 8. Final Verification

Check the branch list, commit history, and working-tree status.

```bash
git branch
git log --oneline --graph --all
git status
```

**Purpose:** Verifies the branches and recent commits and checks whether any uncommitted changes remain.

## Result

The Git branching workflow demonstrates how to create a feature branch, record changes using commits, publish the branch to GitHub, and synchronize the repository after integration.

## Evidence

Add screenshots directly inside the `Assignment 2` folder to document the operations actually performed. Suggested filenames:

- `Collaborative branches.png`
- `Contributors.png`
- `Performance-1.png`
- `Performance-2.png`
- `Pull Request.png`

## Conclusion

Git branching and GitHub integration provide a structured approach to developing, tracking, and integrating application changes while preserving version history.