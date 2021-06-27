export interface Clip {
  id: number,
  fileName: string;
  title: string;
  path: string;
}

const clips: Clip[] = [
  {
    id: 1,
    fileName: `wheres-the-buffet.mp3`,
    title: `Where's the Buffet?`,
    path: `/assets/audio/wheres-the-buffet.mp3`
  },{
    id: 2,
    fileName: `hot-damn.mp3`,
    title: `Hot Damn`,
    path: `/assets/audio/hot-damn.mp3`
  },{
    id: 3,
    fileName: `pansy-immune-system.mp3`,
    title: `Pansy Immune System`,
    path: `/assets/audio/pansy-immune-system.mp3`
  },{
    id: 4,
    fileName: `upper-football.mp3`,
    title: `Upper Football`,
    path: `/assets/audio/upper-football.mp3`
  },{
    id: 5,
    fileName: `william-butterfield.mp3`,
    title: `William Butterfield`,
    path: `/assets/audio/william-butterfield.mp3`
  },{
    id: 6,
    fileName: `smooth-as-silk.mp3`,
    title: `Smooth as Silk`,
    path: `/assets/audio/smooth-as-silk.mp3`
  },{
    id: 7,
    fileName: `black-metal.mp3`,
    title: `Black Metal`,
    path: `/assets/audio/black-metal.mp3`
  },{
    id: 8,
    fileName: `large-can-of-beer.mp3`,
    title: `Large Can of Beer`,
    path: `/assets/audio/large-can-of-beer.mp3`
  },{
    id: 9,
    fileName: `bought-a-new-part.mp3`,
    title: `Bought a New Part`,
    path: `/assets/audio/bought-a-new-part.mp3`
  },{
    id: 10,
    fileName: `who-is-this.mp3`,
    title: `Who is this?`,
    path: `/assets/audio/who-is-this.mp3`
  },{
    id: 11,
    fileName: `futons-instead-of-pews.mp3`,
    title: `Futons Instead of Pews`,
    path: `/assets/audio/futons-instead-of-pews.mp3`
  },{
    id: 12,
    fileName: `challenge-to-a-dual.mp3`,
    title: `Challenge to a Dual`,
    path: `/assets/audio/challenge-to-a-dual.mp3`
  },{
    id: 13,
    fileName: `hahahaha.mp3`,
    title: `Hahahaha`,
    path: `/assets/audio/hahahaha.mp3`
  },{
    id: 14,
    fileName: `where-you-going.mp3`,
    title: `Where You Going?`,
    path: `/assets/audio/where-you-going.mp3`
  },{
    id: 15,
    fileName: `clamy-feeling.mp3`,
    title: `Clamy Feeling`,
    path: `/assets/audio/clamy-feeling.mp3`
  }
];

export const getClips = () => clips;

export const getClip = (id: number) => clips.find(m => m.id === id);
