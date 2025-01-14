---
title: Propose downstream
sidebar_position: 5
---

# `job: propose_downstream`

Land a new upstream release in Fedora. This job only makes sure the changes
happen in Fedora dist-git - no builds. A pull request is created as a result.

## Supported triggers

* **release**

## Optional parameters

* **dist_git_branches** - a (list of) branches in dist-git where packit should work (defaults to `main` which represents _Fedora Rawhide_).
  You can also use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.

:::info
Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,
please see the details [here](/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent).
:::

## Example

```yaml
jobs:
- job: propose_downstream
  trigger: release
- job: propose_downstream
  trigger: release
  dist_git_branches:
    - f35
```

This config would update Fedora Rawhide and Fedora 35 dist-git branches.
