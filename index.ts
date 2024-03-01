import { ubiMinimalTags, nodeJsTags } from './tags' 
import { findLatestStable, findLatestStableRedhat } from './common'


const ubiMinimalDockerVersion = findLatestStable(ubiMinimalTags);

const ubiMinimalRedhatVersion = findLatestStableRedhat(ubiMinimalTags);

console.log(`UBI Minimal Tag Results: DockerVersioning: ${ubiMinimalDockerVersion}, RedHatVersioning: ${ubiMinimalRedhatVersion} `)

const nodeJsDockerVersion = findLatestStable(nodeJsTags);

const nodeJsRedhatVersion = findLatestStableRedhat(nodeJsTags);

console.log(`UBI Minimal Tag Results: DockerVersioning: ${nodeJsDockerVersion}, RedHatVersioning: ${nodeJsRedhatVersion} `)