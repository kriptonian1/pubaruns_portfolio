

const featureData = [
  {
    id: 1,
    title: "Pubarun Basu",
    description:
      "Starting photography from age 4, Basu sees youth as an advantage in the field, allowing him a unique and unfiltered perspective. Basu's richly detailed photographs of daily life on the Ganges River and Indian...",
    image: "/work/Forbes_logo_black.png",
    alt: "forbes-logo",
    link: "https://www.forbes.com/profile/pubarun-basu/",
  },
  {
    id: 2,
    title:
      "Kolkata-Based Photographer Wins Sony’s Youth Photographer of the Year 2021",
    description:
      "For 20-year-old Pubarun Basu, the lockdown months were spent in search of the perfect photograph. Enrolling in the Sony World Photography Awards 2021, the Kolkata-based photographer set out—figuratively—for the best frame. Incidentally, he found it within his ‘safe space’ itself.",
    image: "/work/3.-National-Geographic-Traveller.png",
    alt: "Nat Geo Traveller India-logo",
    link: "https://natgeotraveller.in/kolkata-based-photographer-wins-sonys-youth-photographer-of-the-year-2021/",
  },
  {
    id: 3,
    title: "Meet Pubarun Basu who won the Youth Photographer of the Year 2021 at the Sony World Photography Awards",
    description:
      "In the past two years, not a day has passed in Pubarun Basu’s life without him working on his photography skills. “I would either click or process pictures. It not only kept me engaged during the pandemic but also kept me sane.” The 20-year-old photographer from Kolkata recently won the Youth Photographer of the Year 2021 at the Sony World Photography Awards. “There were 3,30,000 entries from around 220 regions around the world. I am the first Indian to win this title. I am humbled by the recognition,” he says.",
    image: "/work/The_Hindu.webp",
    alt: "The Hindu",
    link: "https://www.thehindu.com/entertainment/art/meet-pubarun-basu-who-won-the-youth-photographer-of-the-year-2021-at-the-sony-world-photography-awards/article34420022.ece",
  },
  {
    id: 4,
    title: "Meet Pubarun Basu, the Kolkata student who is the first Indian to win the Youth Photographer title at Sony World Photography Awards",
    description:
      "At four, Pubarun Basu first held a camera and that was it for him. Since then there has been no looking back for the 20-year-old Kolkata lad. Pubarun won big at the prestigious Sony World Photography Awards on April 15, 2021 and was presented with the title of Youth Photographer of the Year by the World Photography Organisation in London. But that's not all, he is the first Indian to win the title in the 14-year-long history of the awards.",
    image: "/work/the-indian-express.png",
    alt: "Indian Express",
    link: "https://www.edexlive.com/people/2021/may/12/meet-pubarun-basu-the-kolkata-student-who-is-the-first-indian-to-win-the-youth-photographer-title-20601.html",
  },
  {
    id: 5,
    title: "How this 20-year-old Kolkata boy became the first Indian ever to bag the 'Youth Photographer of the Year' title",
    description:
      "Kolkata boy Pubarun Basu became the first Indian to win the Youth Competition of Sony World Photography Awards 2021 and bagged the title of the 'Youth Photographer of the Year 2021' by the World Photography Organization. He got talking to us about his journey and shared a few tips for fellow photographers.",
    image: "/work/India_Today.png",
    alt: "India Today",
    link: "https://www.indiatoday.in/education-today/how-i-made-it/story/20-year-old-kolkata-boy-first-indian-ever-to-bag-youth-photographer-of-the-year-title-1802667-2021-05-14",
  },
  {
    id: 6,
    title: "Pubarun Basu: Meet Kolkata's young photographer who bagged an international award",
    description:
      "The 20-year-old won Sony World Photography Awards on April 15 for his picture, titled 'No Escape from Reality'. The picture is a story of confinement told through his lens during lockdown....",
    image: "/work/indiatv.png",
    alt: "India TV",
    link: "https://www.indiatvnews.com/news/india/pubarun-basu-meet-kolkata-s-young-photographer-who-bagged-an-international-award-704789",
  },
  {
    id: 7,
    title: "Shot to fame within frame",
    description:
      "A South Point High School alumnus, Pubarun won an award for his image No Escape from Reality, clicked inside his bedroom during the lockdown",
    image: "/work/tt_online_logo.png",
    alt: "The Telegraph India",
    link: "https://www.telegraphindia.com/west-bengal/calcutta/young-metro-shot-to-fame-within-frame/cid/1814475",
  },
  {
    id: 8,
    title: "Pubarun Basu Shares The Stories Behind His Best Photographs",
    description:
      "At just the age of 20, Pubarun Basu, a Kolkata resident, managed to put himself on the global landscape of photography. What led to this feat? A picture he clicked during the pandemic, featuring a pair of hands masked behind colourful curtain to depict the sense of loneliness during lockdown. Out of 3,30,000 entries from around 220 regions around the world, Basu became the first Indian to bag the Youth Photographer of the Year 2021 at the Sony World Photography Awards.",
    image: "/work/logo2-Copy-2.jpg",
    alt: "Man's World India",
    link: "https://www.mansworldindia.com/currentedition/pubarun-basu-shares-the-stories-behind-his-best-photographs/amp/",
  },
  {
    id: 9,
    title: "Interview: Youth Photographer of the Year",
    description:
      "Winning the Youth Photographer of the Year 2021 title has been nothing less than a dream come true. I am truly humbled by this recognition, to say the least. I have always been inspired by the works of the legendary photographers that have been awarded previously in this esteemed competition, and it fills me with immense pleasure to see my picture as a part of that incredible lineage.",
    image: "/work/wpo.png",
    alt: "Man's World India",
    link: "https://www.worldphoto.org/blogs/14-05-21/interview-youth-photographer-year",
  },
  {
    id: 10,
    title: "Readers' pictures of the year 2018",
    description:
      "Winning the Youth Photographer of the Year 2021 title has been nothing less than a dream come true. I am truly humbled by this recognition, to say the least. I have always been inspired by the works of the legendary photographers that have been awarded previously in this esteemed competition, and it fills me with immense pleasure to see my picture as a part of that incredible lineage.",
    image: "/work/BBC_Logo.png",
    alt: "BBC",
    link: "https://www.bbc.com/news/in-pictures-46528185",
  },
  {
    id: 11,
    title: "Sony World Photography Award unveils the year's best photographers",
    description:
      "Winning the Youth Photographer of the Year 2021 title has been nothing less than a dream come true. I am truly humbled by this recognition, to say the least. I have always been inspired by the works of the legendary photographers that have been awarded previously in this esteemed competition, and it fills me with immense pleasure to see my picture as a part of that incredible lineage.",
    image: "/work/CNN_International_logo.svg.png",
    alt: "cnn",
    link: "https://edition.cnn.com/style/article/2021-sony-world-photography-award-winners/index.html",
  },
  {
    id: 12,
    title: "Plague planet: the Sony world photography awards 2021 – in pictures",
    description:
      "Youth photographer of the year ‘I created this picture with the idea of representing the feeling of being trapped in a moment, or in one’s own reality. Participating in this competition has given me a fresh perspective on my art. I have seen some extraordinary photographs by my fellow youth photographers, and I take immense pride in the fact that my generation has such brilliant minds. I aspire to improve myself as an artist and would like to express my gratitude to my friends and family for always encouraging me to go the extra mile’",
    image: "/work/gurdian.png",
    alt: "The Guardian",
    link: "https://www.theguardian.com/artanddesign/gallery/2021/apr/15/plague-sony-world-photography-awards-2021-in-pictures",
  },
  {
    id: 13,
    title: "The Atlantic",
    description:
      "Youth Photographer of the Year, Youth, Composition and Design. 'I created this picture with the idea of representing the feeling of being trapped in a moment, or in one's own reality. I saw the curtains as the fabrics of the space-time continuum, which those two hands fail to break out of. The shadow cast by the parallel railings onto the fabric also gives the impression of a cage, in which the entity is trapped for eternity.'",
    image: "/work/the-atlantic.png",
    alt: "The Atlantic",
    link: "https://www.theatlantic.com/photo/2021/04/winners-2021-sony-world-photography-awards/618662/#:~:text=Pubarun%20Basu",
  },
  {
    id: 14,
    title: "Daily Mail",
    description:
      "Youth Photographer of the Year, Youth, Composition and Design. 'I created this picture with the idea of representing the feeling of being trapped in a moment, or in one's own reality. I saw the curtains as the fabrics of the space-time continuum, which those two hands fail to break out of. The shadow cast by the parallel railings onto the fabric also gives the impression of a cage, in which the entity is trapped for eternity.'",
    image: "/work/logo_mol.gif",
    alt: "The Atlantic",
    link: "https://www.dailymail.co.uk/travel/escape/article-9450163/The-winners-prestigious-Sony-World-Photography-Awards-2021-revealed.html",
  },
  {
    id: 15,
    title: "A series of portraits of marginal England wins the Sony World Photography",
    description:
      "One of the categories that usually holds some of the best surprises at the Sony World Photography Awards is the one dedicated to the youngest authors. Pubarun Basu from India is this year's winner. ",
    image: "/work/La_Vanguardia_Logo.png",
    alt: "La Vanguardia",
    link: "https://www.lavanguardia.com/tecnologia/20210415/6773725/serie-retratos-inglaterra-olvidada-gana-sony-world-photography-sony-world-photography-awards-2021.html",
  },
  {
    id: 16,
    title: "Global Indian",
    description:
      "Crammed into a narrow alleyway in the backstreets of Kumortuli in North Kolkata, a sculptor is sculpting the face of goddess Durga ahead of Pujo. That stunning photo by young photographer Pubarun Basu speaks volumes of his love for the craft",
    image: "/work/logo (6).png",
    alt: "Global Indian",
    link: "https://www.globalindian.com/youth/story/global-indian-exclusive/photographer-of-the-year-2021-pubarun-basus-lens-evokes-emotions-creates-stellar-imagery/",
  },
  {
    id: 17,
    title: "Alpha Universe",
    description:
      "Selected from six category winners, Pubarun Basu (India, 19 years-old) has won Youth Photographer of the Year 2021for his image No Escape from Reality. In the photograph the shadows of railings projected onto curtains create the illusion of cage bars from behind which a pair of hands is seen as if trying to break through.",
    image: "/work/caf6352de61a1f354ca76c11e345fca1.jpg",
    alt: "Alpha Universe",
    link: "https://alphauniverse.com/stories/see-the-overall-winners-for-the-sony-world-photography-awards-2021/",
  },
  {
    id: 18,
    title: "Photographer of the Year 2021, Pubarun Basu’s lens evokes emotions, creates stellar imagery",
    description:
      "Youth Photographer of the Year, Youth, Composition and Design. 'I created this picture with the idea of representing the feeling of being trapped in a moment, or in one's own reality. I saw the curtains as the fabrics of the space-time continuum, which those two hands fail to break out of. The shadow cast by the parallel railings onto the fabric also gives the impression of a cage, in which the entity is trapped for eternity.'",
    image: "/work/INDICA-white-logo.svg",
    alt: "Indica ",
    link: "https://indica.in/indica-pictures-announces-icpg-2021-grantees/",
  },
  {
    id: 19,
    title: "Interview with Pubarun Basu – Capturing the extraordinary in the ordinary",
    description:
      "Pubarun Basu is a 20-year-old photographer based in Kolkata, India who has already made a name for himself internationally with his captivating photos. He has won several awards for his work, and it is easy to see why. His documentation of the lives and culture surrounding the river Ganga captures the interconnection between man and nature whilst highlighting the uniqueness of everyday life. In this interview, we will learn more about Basu’s creative process and how his journey to becoming the celebrated photographer that he is today started.",
    image: "/work/logo.svg",
    alt: "YouPic",
    link: "https://youpic.com/story/11370/interview-with-pubarun-basu-capturing-the-extraordinary-in-the-ordinary",
  },
  {
    id: 20,
    title: "Siena Photo Awards",
    description:
      "Pubarun Basu is a 20 year old photographer based in Kolkata, India. He has been clicking pictures since he was just 4, under the guidance of his father, who is a renowned photographer himself. Pubarun was recently announced as the Youth Photographer of the Year 2021 by Sony World Photography Awards - World Photography Organization. His work has been published by international organisations such as National Geographic, Forbes, The Guardian, BBC, CNN, Rolling Stone, GQ, Vanity Fair, and many more. He has been featured by some of the",
    image: "/work/creative.jpg",
    alt: "Siena Photo Awards",
    link: "https://creative.sienawards.com/profile/2711/pubarun-basu",
  },
  {
    id: 21,
    title: "Get Bengal",
    description:
      "Youth Photographer of the Year, Youth, Composition and Design. 'I created this picture with the idea of representing the feeling of being trapped in a moment, or in one's own reality. I saw the curtains as the fabrics of the space-time continuum, which those two hands fail to break out of. The shadow cast by the parallel railings onto the fabric also gives the impression of a cage, in which the entity is trapped for eternity.'",
    image: "/work/GB-Logo-2020-head.jpg",
    alt: "Get Bengal",
    link: "https://www.getbengal.com/details/kolkata-boy-pubarun-basu-wins-youth-photographer-of-the-year-2021-at-the-sony-world-photography-award",
  },
  {
    id: 22,
    title: "IN THE NAME OF GOD",
    description:
      'The photo series portrays the journey to freedom for the Ramnamis, a lower caste tribe in India, and the permanent tattoos of "Ram" an act of defiance against the casteist regime',
    image: "/work/Goethe-Institut_Logo.png",
    alt: "Goethe Institu",
    link: "https://www.goethe.de/ins/in/en/kul/soc/fre/23589464.html",
  },
  {
    id: 23,
    title: "Pubarun Basu – The Journey behind Photography",
    description:
      "Pubarun Basu says, “My parents told me that I was 2 when I held a camera for the first time. At 4 I was visiting a fair at Shantiniketan. While the whimsical folk dances captivated my attention, baba handed me his camera and said ‘go crazy with it!’. That day, I went on to click my first ever picture! Later, we even got the prints developed; I have those to date!",
    image: "/work/cropped-Storiyaan-Logo.png",
    alt: "Storiyaan ",
    link: "https://storiyaan.com/pubarun-basu-photography/",
  },
  {
    id: 24,
    title: "Back These Indians feature in Forbes 30 Under 30 Asia List 2022: Complete list",
    description:
      "Basu has been photographing since he was four years old, and he sees his youth as an advantage in the industry, giving him a unique and unadulterated perspective. Basu's images of daily life on the Ganges River and Indian spirituality have appeared in publications such as National Geographic,",
    image: "/work/mint_rep_logo_140_50.svg",
    alt: "Livemint",
    link: "https://www.livemint.com/news/india/these-indians-feature-in-forbes-30-under-30-asia-list-2022-complete-list-11653556597139.html",
  },
  {
    id: 25,
    title: "Sanmarg",
    description:
      "Sanmarg coverage of an interview with Pubarun Basu B.A. English (Hons), Sem VI Student of The Bhawanipur College has been featured in the Forbes 30 Under 30 Asia 2022 – The Arts list.",
    image: "/work/bges-logo-v1.png",
    alt: "Sanmarg ",
    link: "https://thebges.edu.in/sanmarg-coverage-of-an-interview-with-pubarun-basu-b-a-english-hons-sem-vi-student-of-the-bhawanipur-college-has-been-featured-in-the-forbes-30-under-30-asia-2022-the-arts-list/",
  },
  {
    id: 26,
    title: "Pubarun Basu’s Art Submission and Winner of Sony’s Competition in 2021",
    description:
      "For this year’s Youth Photographer of 2021 at the Sony World Photography Awards, Pubarun Basu made history. Out of 330,000 entries from around 220 regions around the world, he would become the first Indian to win this title. During the pandemic, he noted that: “It was during the lockdown and I had to find something from my surroundings for the competition. ",
    image: "/work/cropped-logo-2x-line-1.png.webp",
    alt: "Sanmarg ",
    link: "https://creatorsnetwork.co/pubarun-basus-art-submission-and-winner-of-sonys-competition-in-2021/",
  },
  {
    id: 27,
    title: "Clapself",
    description:
      "Youth Photographer of the Year, Youth, Composition and Design. 'I created this picture with the idea of representing the feeling of being trapped in a moment, or in one's own reality. I saw the curtains as the fabrics of the space-time continuum, which those two hands fail to break out of. The shadow cast by the parallel railings onto the fabric also gives the impression of a cage, in which the entity is trapped for eternity.'",
    image: "/work/U72900UP2022FTC163316.jpg",
    alt: "Clapself",
    link: "https://www.clapself.com/s/winner-of-the-sony-world-photography-award-shares-his-success-tips/dweonepyyom7",
  },
  {
    id: 28,
    title: "FO2 STAGE | 135 | Pubarun Basu",
    description:
      "I was born into a photography family. My father is a photographer, so I became aware of all the gadgets from a young age. At first, I was just intrigued by them. I still have my first clicked photos, which were from a rural area called Shantiniketan near our city. It was a Mela, and many folk artists were a part of it. I was four years old and had clicked these photos from my father's DSLR. I soon realised that I had a deep interest in photography. I started learning from my father, and studying the works of great maestros of the field, and am still gaining knowledge and learning more about the world of visual arts every day.",

    image: "/work/FO2.IN_73c28891-c98e-47e5-babd-ca786a8a2810.webp",
    alt: "FO2",
    link: "https://www.fo2.in/blogs/fo2-stage-best-photography-blogs/fo2-stage-135-pubarun-basu",
  },
  {
    id: 29,
    title: "Sony World Photography Awards 2021",
    description:
      "The winners of the 2021 Sony World Photography Awards have been announced, with Craig Easton named as Photographer of the Year for his work on the representation of communities in northern England.",
    image: "/work/The-school-of-photography-web-site-logo_1500px.png",
    alt: "The School of Photography",
    link: "https://www.theschoolofphotography.com/blog/sony-world-photography-awards-2021",
  },
  {
    id: 30,
    title: "Fantastic winners images from the Sony World Photography Awards 2021",
    description:
      "We've written before about the marvellous images submitted to the Sony World Photography Awards 2021. Now, the judges have whittled the list down and announced the overall winners for this year's competition. With Craig Easton from the UK being revealed as the overall winner receiving a $25,000 prize and a range of Sony's digital imaging kit too. ",
    image: "/work/pl-logo-full-colored-light.svg",
    alt: "Pocket Lint",
    link: "https://www.pocket-lint.com/cameras/news/sony/156245-fantastic-winners-and-shortlisted-images-from-the-sony-world-photography-awards/",
  },
  {
    id: 31,
    title: "Sony World Photography Awards 2021: tutte le foto dei vincitori",
    description:
      "The 19-year-old Indian Pubarun Basu won the title of Youth Photographer of the Year 2021 with the photo No Escape from Reality in which the shadows of the railings projected on the curtains look like the bars of a cage from which two hands appear trying to escape. The illusion created by the darkness and the gestures of the hands recreate the feeling of being trapped, an experience shared by many people around the world this past year.",
    image: "/work/logo.96f2bf53beb1156a22a9fcdaec1578f94ce1aa57.svg",
    alt: "Vanity Fair Italia",
    link: "https://www.vanityfair.it/news/foto/2021/04/15/sony-world-photography-awards-2021-foto-vincitori-assoluti-categorie-italiani",
  },
  {
    id: 32,
    title: "Sony World Photography Awards 2021, the winners",
    description:
      "The World Photography Organization crowns  Craig Easton (UK) overall winner of the  2021 Sony World Photography Awards . With the Bank Top series, a collaborative work with writer and scholar Abdul Aziz Hafiz, the photographer examines the portrayal and misrepresentation of northern England communities, focusing on the close-knit Bank Top neighborhood of Blackburn. The initiative promoted by the Blackburn Museum & Art Gallery, Kick Down the Barriersit was created in response to the media image of Blackburn as 'Britain's most segregated city'.",
    image: "/work/logo.cbfea9e262f9d5352fa00a6b19695b960fa6d905.svg",
    alt: "Vanity Fair Italia",
    link: "https://www.gqitalia.it/lifestyle/gallery/sony-world-photography-awards-2021-vincitori-foto/amp",
  },
  {
    id: 33,
    title: "Who are the winners of the 2021 Sony World Photography Awards, the photography event of the year",
    description:
      "The World Photography Organization has just announced the complete list of winners of the 2021 Sony World Photography Awards , the latest edition of one of the most prestigious photography contests in the world that makes it clear who is the photographer of the year , as well as the winners of the Open, Student and Youth contests.",
    image: "/work/BI_light_background_color_horizontal.png",
    alt: "Vanity Fair Italia",
    link: "https://www.businessinsider.es/todos-ganadores-sony-world-photography-awards-2021-847837",
  },
  {
    id: 34,
    title: "Fourteen spectacular winning images from the Sony World Photography Awards 2021",
    description:
      "The World Photography Organisation has announced the overall winners in the prestigious Sony World Photography Awards 2021. The Photographer of the Year title and accompanying $25,000 (USD) cash prize and a range of Sony’s digital imaging kit is awarded to the esteemed documentarian Craig Easton (United Kingdom) for his series Bank Top. Also announced are the ten category winners alongside 2nd and 3rd place of the Professional competition as well as overall winners of the Open, Student and Youth competitions.",
    image: "/work/image-18-3.png",
    alt: "The Telegraph UK",
    link: "https://www.telegraph.co.uk/news/2021/04/15/fourteen-spectacular-winning-images-sony-world-photography-awards/",
  },
];

export default featureData;