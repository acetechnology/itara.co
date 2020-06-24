<template>
  <div>
    <v-container data-aos="fade-up" class="pl-0 pr-0 pt-0" fluid fill-height>
      <v-layout align-center justify-center>
        <v-card flat class="careersHeader">
          <v-container class="pl-0 pr-0 pt-0" fluid fill-height>
            <v-layout align-center justify-center>
              <v-card-text>
                <h1 class="text-center">
                  Join our journey to lead the
                  <br />digital revolution in Africa
                </h1>
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-layout>
    </v-container>
    <v-container data-aos="fade-left" class="careersContent">
      <v-row align-left justify-left>
        <v-col cols="12">
          <h2>What We Seek</h2>
          <p>We are searching for people willing to understand our long-term vision and are ready to build the company with us. We seek people who are enthusiastic about the job, proud of the work they do and are looking for new ways to continually improve and challenge themselves. We need smart creatives looking to break boundaries.</p>
          <h2>What do we do? What do we offer?</h2>
          <p>Itara is an African technology company established to lead the digital revolution in Africa, catalyze manufacturing and advance industrialization in Africa by utilizing technologies of the fourth industrial revolution to foster sustainable, equitable and inclusive growth. We are currently building our first product – Itara Marketplace. Itara Marketplace is a platform for consumers to purchase locally made goods.</p>

          <p>Itara’s Marketplace long term goal is to be Africa’s biggest online/offline store for African products. We intend to achieve this by leveraging the latest technologies (Cloud computing, AI, Big Data, etc) with the best business practices and processes. We would establish partnerships with manufacturers, entrepreneurs, and creatives and work closely with them to scale their businesses in order for us to meet our goals.</p>
          <p>As a startup, we are looking to hire ONLY the best people to help us achieve our long-term goals. We would be working out of Workstation in Victoria Island and promise flexibility for “Itarians” (of course you would love to be called that).</p>
          <p>We promise working with us would be fun and challenging. If you consider yourself a smart creative and would love to embark on this journey with us, send your CV and a one-page cover on why you want to work with Itara to info@itara.co.</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="careersContent" data-aos="fade-up">
      <h2 class="mb-5">Open Positions</h2>
          <v-row align-left justify-left>
        <v-col cols="12">
        <v-card class="mb-5" v-for="job in jobs" :key="job.title">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline jobtitle mb-1">{{job.title}}</v-list-item-title>
              <v-list-item-subtitle>{{job.deadline}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-card-actions>
              <v-btn
                @click.stop="dialog = true, title = job.title, selectedJob = job.html, deadline = job.deadline"
                text
                class="learnMore"
              >Learn More</v-btn>
            </v-card-actions>
          </v-list-item>
        </v-card>
        </v-col>
        <v-col cols="12">
        <v-dialog v-model="dialog" scrollable max-width="75%">
          <v-card class="pr-10 pl-10 currentJob">
            <v-card-title class="headline mt-7">
              {{title}}
              <v-subheader class="apply">{{deadline}}</v-subheader>
              <v-spacer></v-spacer>
              <v-btn text class="mr-5 learnMore">
                <a class="applylink" href="mailto:info@itara.co" target="_top">Apply</a>
              </v-btn>
            </v-card-title>
            <v-btn
              @click="dialog = false"
              class="mr-3 mt-3 closeBTN closeIcon"
              outlined
              x-small
              fab
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-divider></v-divider>
            <v-card-text class="mt-3" v-html="selectedJob"></v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="ma-2">
              <v-btn class="closeBTN text-center" outlined text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        title: "",
        selectedJob: "",
        deadline: "",
        jobs: [
          {
            title: "Partner Relationship Associate/ Business Analyst",
            deadline: "Fulltime: Deadline: 26/10/2019",
            html:
              "<p>The role of the partner relationship associate/business analyst associate entails managing our partners. To effectively manage our partners, the Partner relationship associate MUST thoroughly understand our business, the partner's business, provide innovative tailored solutions to scale their business in line with our mission and ensure the value created for our partners is reflected in our business.</p>\
                  <h2>Essential responsibilities</h2> \
                  <br> \
                  <h3>Partner Sourcing</h3> \
                  <ul>\
                  <li>Sourcing for partners – develop efficient strategies to find partners.</li> \
                  <li>Reach out to sourced partners.</li> \
                  </ul>\
                  <h3>Partner Recruitment</h3>\
                  <ul>\
                  <li>Communicate our mission, vision, values, value proposition and our goals & objectives to the prospective partner.</li> \
                  <li>Assist in the development of partner recruitment materials.</li> \
                  </ul>\
                  <h3>Partner Training/Onboarding</h3> \
                  <ul>\
                  <li>Guide partners throughout the partner vetting process.</li> \
                  <li>Communicating the company’s mission, vision, values and value proposition to our partners throughout the process.</li> \
                  <li>Maintaining a consistent relationship with our partners.</li> \
                  <li>Train partners on how to use our technology.</li> \
                  </ul>\
                  <h3>Partner Business Growth</h3> \
                  <ul>\
                  <li>Understand partner business and propose innovative solutions to partners to scale their business.</li> \
                  <li>Set sales targets with partners and ensure partners are meeting their sales goals on the platform.</li> \
                  </ul>\
                  <h3>Partner Experience</h3> \
                  <ul>\
                  <li>Consistently maximize partner experience and interaction with the company and the platform.</li> \
                  <li>Ensure interactions between product partners and service partners are seamless at all times.</li> \
                  </ul>\
                  <h3>Partner Compliance and Duties</h3> \
                  <ul>\
                  <li>Ensure partners comply with state and national regulations.</li> \
                  <li>Ensure partners comply with the company’s policies and terms of partnership.</li> \
                  <li>Ensure service partners are consistently performing and meeting their service KPIs.</li> \
                  </ul>\
                  <h3>Other Responsibilities</h3> \
                  <ul>\
                  <li>Assist with setting standards for the partners.</li> \
                  <li>Assist with setting standards for products on the platform.</li> \
                  <li>Assist with setting standards and KPIs for service partners.</li> \
                  <li>Assist with formulating operations processes in the company.</li> \
                  </ul>\
                  <h3>Desired skills</h3> \
                  <ul>\
                  <li>Deep familiarity with Microsoft Excel, Word, and Powerpoint.</li> \
                  <li>Curiosity and innate desire to learn.</li> \
                  <li>Exquisite oral and written communication skills. Good at public speaking and listening.</li> \
                  <li>Problem identification and solving.</li> \
                  <li>Opportunity recognition.</li> \
                  <li>Relationship building and management.</li> \
                  <li>Possess proper time management, objection prevention, and objection handling skills.</li> \
                  <li>Analytical thinking.</li> \
                  <li>Possess excellent research and report creation skills.</li> \
                  </ul>\
                  <h3>What we expect</h3> \
                  <ul>\
                  <li>We expect you to thoroughly understand our business, our mission, and our vision and eschew our values in everything you do.</li> \
                  <li>You should be ready to go into the field to recruit partners. You would be required to communicate our vision, mission, values, our value proposition, and goals consistently to our partners.</li> \
                  <li>Possess a business degree (not mandatory) or relevant experience/certification.</li> \
                  <li>You must be a team player and a problem solver. We need you to identify problems and always proffer solutions to solve the problems.</li> \
                  <li>We want an avid reader who is quick to grasp new concepts.</li> \
                  <li>A sincere lover of technology. We expect you to stay up to date with new technology trends and proffer innovative ways we can use them to create value for our business and society.</li> \
                  <li>Attention to detail.</li> \
                  <li>General business development knowledge. Show familiarity with both local and global E-commerce trends.</li> \
                  </ul>\
                  <h3>NB: Applicants should endeavor to read and understand our mission. This is a critical factor in making our employment decision.</h3>"
          },
          {
            title: "Marketer",
            deadline: "Fulltime: Deadline: 26/10/2019",
            html:
              "<h3>Essential responsibilities</h3> \
                  <ul>\
                  <li>Assist in crafting strategic marketing plan.</li> \
                  <li>Track trends and adopt trends that adds maximum value to our business.</li> \
                  <li>Create brand values in collaboration with design team.</li> \
                  <li>Search and adopt marketing tools to improve our business.</li> \
                  <li> Manage marketing budget and calculate return on investment.</li> \
                  <li> Deeply understand our customers and partners and proffer innovative ways to reach them.</li> \
                  <li> Perform market research and create reports.</li> \
                  <li> Develop and implement SEO and PPC strategies.</li> \
                  <li> Perform digital marketing activities.</li> \
                  <li> Design, build and maintain our social media presence. </li> \
                  <li>Identify target markets and segments within target market.</li> \
                  <li>Audit customer’s brand experience.</li> \
                  <li>Collaborate with cross-functional team to new and innovative growth strategies.</li> \
                  <li> Develop engaging online content. Work with graphic designers to develop graphics and video content.</li> \
                  </ul>\
                  <h3>Desired Skills</h3> \
                  <ul>\
                  <li>Solid knowledge of website analytics tools (eg Google Analytics, netInsights).</li> \
                  <li>Pure creativity and imagination.</li> \
                  <li>Deeply familiar with search engine optimization and relevant tools.</li> \
                  <li>Highly creative with experience in identifying target audiences and devising digital campaigns that inform, engage and motivates. </li> \
                  <li>Experience with content management system (CMS) and marketing automation tools e.g HubSpot.</li> \
                  <li>Experience with product management tools like SurveyMonkey,Asana etc.</li> \
                  <li>Social media advertising.</li> \
                  <li>Identify consumer behavior.</li> \
                  <li>Deep understanding of customer experience.</li> \
                  <li>Strong analytical skills and data-driven thinking.</li> \
                  </ul>\
                  <h3>What We Expect</h3> \
                  <ul>\
                  <li>Possess a Marketing degree or relevant experience/certification.</li> \
                  <li>Proven work experience in Marketing (digital marketing).</li> \
                  <li>Must demonstrate how technology is affecting the marketing landscape and how can we prepare for its impact.</li> \
                  <li>You must be open to learning new techniques.</li> \
                  <li>You must be up-to-date on latest trends and technologies in digital marketing.</li> \
                  <li>General business development knowledge. Show familiarity with both local and global E-commerce trends.</li> \
                  </ul>\
                  <br>\
                  <p>The application closes on 26/10/2019. Screening begins as soon as we receive your application. Successfully screened applicants would be contacted for an office interview.</p> \
                  <p>We look forward to receiving your application. </p> \
                  <h3>NB: Applicants should endeavor to read and understand our mission. This is a critical factor in making our employment decision.</h3>"
          },
          {
            title: "Graphics Designer",
            deadline: "Fulltime: Deadline: 26/10/2019",
            html:
              "<p>We are searching for someone skilled in creating content </p> \
                  <h3>Essential responsibilities</h3> \
                  <ul>\
                  <li>Create digital content.</li> \
                  <li>Create content for marketing.</li> \
                  <li>Create and design whitepapers.</li> \
                  <li>Create documents for the company.</li> \
                  <li>Contributes to team effort by accomplishing related results as needed. </li> \
                  </ul>\
                  <h3>Desired Skills</h3> \
                  <ul>\
                  <li>Proficient in Graphic design with tools like</li> \
                  <li>Strong communication and collaboration skills.</li> \
                  <li>Branding and delivering presentations.</li> \
                  <li>Excellent creativity.</li> \
                  <li>Excellent in interactive media – actively engage a user through mediums like text, moving image, animation, audio, video, or video games.</li> \
                  </ul>\
                  <h3>What We Expect</h3> \
                  <ul>\
                  <li>You must be a team player and a problem solver.</li> \
                  <li>Employ the latest technology in Graphics design.</li> \
                  <li>Attention to detail.</li> \
                  <li>Must possess excellent oral and written communication skills.</li> \
                  <li>Possess general business development knowledge. Show familiarity with both local and global E-commerce trends </li> \
                  </ul>\
                  <br>\
                  <p>The application closes on 26/10/2019. Screening begins as soon as we receive your application. Successfully screened applicants would be contacted for an office interview.</p> \
                  <p>We look forward to receiving your application. </p> \
                  <h3>NB: Applicants should endeavor to read and understand our mission. This is a critical factor in making our employment decision.</h3>"
          }
        ]
      };
    }
  };
</script>
