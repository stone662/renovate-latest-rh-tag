When using Renovate's Docker datasource to manage RedHat versioned images, a non latest stable version can be returned.

For example, please run 

`npm install`

`npm run build`

`npm run start`

This issue is presumably due to the use of Docker versioning being used to compare tags
> [Docker versioning being used to compare tags](https://github.com/renovatebot/renovate/blob/main/lib/modules/datasource/docker/common.ts#L328)

Given the tags array
```

 [
    "8.4",
    "8.5",
    "8.4-200",
    "8.3-298",
    "8.5-204-source",
    "8.6-751",
    "8.0-204",
    "8.4-205.1626828526-source",
    "8.4-205-source",
    "8.0",
    "8.1-398-source",
    "8.2-345",
    "8.2-301.1592810506-source",
    "8.4-210",
    "8.4-205",
    "8.1",
    "8.2-301.1592810506",
    "8.5-243",
    "8.2-267",
    "8.3",
    "8.5-218",
    "8.2-301.1593113563",
    "8.5-204",
    "8.6-854-source",
    "8.2",
    "8.1-407-source",
    "8.5-240",
    "8.4-208",
    "8.2-301.1593113563-source",
    "8.3-291",
    "8.1-279",
    "8.6-751-source",
    "8.5-240-source",
    "8.5-240.1648458092",
    "8.6-854",
    "8.2-349",
    "8.4-200.1622548483-source",
    "8.1-398",
    "8.5-243.1651231653",
    "8.3-298.1618432845",
    "8.2-301-source",
    "8.0-213",
    "8.4-212",
    "8.1-407",
    "8.5-243-source",
    "8.2-339-source",
    "8.6-902",
    "8.5-230",
    "8.5-230-source",
    "8.0-131"
 ]
```
The docker datasource function [findLatestStable(tags: string[])](https://github.com/renovatebot/renovate/blob/main/lib/modules/datasource/docker/common.ts#L328) returns the tag `8.6-751` rather than the expected `8.6-902`

The RedHat versioning scheme introduced in this [PR](https://github.com/renovatebot/renovate/pull/16294) can be used to compare these tags instead. This RedHat versioning scheme gives the expected result

This issue is more noticeable when coupled with an incomplete list of tags described [here](https://github.com/renovatebot/renovate/discussions/23481).

Redhat versioned tag arrays that contain `latest` are not effected by this issue due to [this filtering](https://github.com/renovatebot/renovate/blob/main/lib/modules/datasource/docker/index.ts#L1011). If a Redhat versioned tag array does not contain a latest tag, this issue shows up