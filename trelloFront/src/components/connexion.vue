<template>
  <form class="formSignUp" @submit.prevent v-if="formConnect == false">
    <a class="cross" href="http://localhost:3000"
      ><svg
        width="100%"
        height="100%"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 10L277 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M276.5 10L9.99999 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <input
      type="email"
      name="username"
      required
      v-model="user"
      placeholder="votre mail qui servira d'identifiant"
    />
    <input
      type="password"
      name="passeword"
      required
      v-model="pass1"
      placeholder="votre mot de passe"
    />
    <button @click="submitInscription">Connexion</button>
    <p class="passwordKo" v-if="toggleInscriptionIssues == true">problème de connexion</p>
  </form>
  <article class="getAll" v-if="formConnect == true">
    <div class="contener-post contener-tasks">
      <p class="title-contener">Tasks</p>
      <div v-for="post in arrayPostit"  class="post">
        <div class="crossSup" v-if="post.status == '1'" @click="suppPost(post._id)">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 793 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23L770 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
            <path
              d="M770 23L23 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p class="title-post" v-if="post.status == '1'">{{ post.title }}</p>
        <p class="text-post" v-if="post.status == '1'">{{ post.text }}</p>
        <div class="progress-button" v-if="post.status == '1'">
          <p
            class="post-status"
            v-if="post.status == '1'"
            @click="modifPostStatus(post._id, 2)"
          >
           In Progress
          </p>
          <p
            class="post-status"
            v-if="post.status == '1'"
            @click="modifPostStatus(post._id, 3)"
          >
         In Done
          </p>
        </div>
      </div>
    </div>
    <div class="contener-post">
      <p class="title-contener">In progress</p>
      <div v-for="post in arrayPostit" class="post">
        <div class="crossSup" v-if="post.status == '2'" @click="suppPost(post._id)">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 793 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23L770 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
            <path
              d="M770 23L23 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p class="title-post" v-if="post.status == '2'">{{ post.title }}</p>
        <p class="text-post" v-if="post.status == '2'">{{ post.text }}</p>
        <div class="progress-button">
          <p
            class="post-status"
            v-if="post.status == '2'"
            @click="modifPostStatus(post._id, 1)"
          >
           in Tasks
          </p>
          <p
            class="post-status"
            v-if="post.status == '2'"
            @click="modifPostStatus(post._id, 3)"
          >
           Done
          </p>
        </div>
      </div>
    </div>
    <div class="contener-post">
      <p class="title-contener">Done!</p>
      <div v-for="post in arrayPostit" class="post">
        <div class="crossSup" v-if="post.status == '3'" @click="suppPost(post._id)">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 793 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23L770 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
            <path
              d="M770 23L23 770"
              stroke="white"
              stroke-width="45"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p class="title-post" v-if="post.status == '3'">{{ post.title }}</p>
        <p class="text-post" v-if="post.status == '3'">{{ post.text }}</p>
        <div class="progress-button">
          <p
            class="post-status"
            v-if="post.status == '3'"
            @click="modifPostStatus(post._id, 1)"
          >
             In Tasks
          </p>
          <p
            class="post-status"
            v-if="post.status == '3'"
            @click="modifPostStatus(post._id, 2)"
          >
            In progress
          </p>
        </div>
      </div>
    </div>
    <form class="addPost" v-if="formPostAdd == true" @submit.prevent>
      <input type="text" name="title" v-model="titlePost" required placeholder="title" />
      <textarea
        type="text"
        name="text"
        v-model="textPost"
        required
        placeholder="Text"
      ></textarea>
      <input type="hidden" name="status" v-model="status" required />
      <input type="hidden" name="id_user" v-model="userId" required />
      <button @click="submitPost">add task</button>
    </form>
    <div class="timer" v-if="timerBloc==true"></div>
  </article>
  <article class="dashboard" v-if="formConnect == true">
    <div class="button">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1490 1544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M293.376 353.376C47.5413 599.211 47.5413 997.789 293.376 1243.62C539.211 1489.46 937.789 1489.46 1183.62 1243.62C1429.46 997.789 1429.46 599.211 1183.62 353.376"
          stroke="#0FBCF9"
          stroke-width="30"
          stroke-linecap="round"
        />
        <path
          d="M745 115L745 772"
          stroke="#0FBCF9"
          stroke-width="30"
          stroke-linecap="round"
        />
        <g filter="url(#filter0_f_0_1)">
          <path
            d="M300.123 354.124C54.2883 599.959 54.2883 998.536 300.123 1244.37C545.958 1490.21 944.536 1490.21 1190.37 1244.37C1436.21 998.536 1436.21 599.959 1190.37 354.124"
            stroke="#0FBCF9"
            stroke-width="30"
            stroke-linecap="round"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <path
            d="M751.747 115.748L751.747 772.748"
            stroke="#0FBCF9"
            stroke-width="30"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="0.74707"
            y="239.124"
            width="1489"
            height="1304.62"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="636.747"
            y="0.747559"
            width="230"
            height="887"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_0_1" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="button" @click="addPostForm()">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 105 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.2578 33.3867V22.5078C34.2578 21.6745 34.0885 20.9518 33.75 20.3398C33.4245 19.7148 32.9297 19.2331 32.2656 18.8945C31.6016 18.556 30.7812 18.3867 29.8047 18.3867C28.8932 18.3867 28.0924 18.543 27.4023 18.8555C26.7253 19.168 26.1914 19.5781 25.8008 20.0859C25.4232 20.5938 25.2344 21.1406 25.2344 21.7266H21.6211C21.6211 20.9714 21.8164 20.2227 22.207 19.4805C22.5977 18.7383 23.1576 18.0677 23.8867 17.4688C24.6289 16.8568 25.5143 16.375 26.543 16.0234C27.5846 15.6589 28.7435 15.4766 30.0195 15.4766C31.556 15.4766 32.9102 15.737 34.082 16.2578C35.2669 16.7786 36.1914 17.5664 36.8555 18.6211C37.5326 19.6628 37.8711 20.9714 37.8711 22.5469V32.3906C37.8711 33.0938 37.9297 33.8424 38.0469 34.6367C38.1771 35.431 38.3659 36.1146 38.6133 36.6875V37H34.8438C34.6615 36.5833 34.5182 36.0299 34.4141 35.3398C34.3099 34.6367 34.2578 33.9857 34.2578 33.3867ZM34.8828 24.1875L34.9219 26.7266H31.2695C30.2409 26.7266 29.3229 26.8112 28.5156 26.9805C27.7083 27.1367 27.0312 27.3776 26.4844 27.7031C25.9375 28.0286 25.5208 28.4388 25.2344 28.9336C24.9479 29.4154 24.8047 29.9818 24.8047 30.6328C24.8047 31.2969 24.9544 31.9023 25.2539 32.4492C25.5534 32.9961 26.0026 33.4323 26.6016 33.7578C27.2135 34.0703 27.9622 34.2266 28.8477 34.2266C29.9544 34.2266 30.931 33.9922 31.7773 33.5234C32.6237 33.0547 33.2943 32.4818 33.7891 31.8047C34.2969 31.1276 34.5703 30.4701 34.6094 29.832L36.1523 31.5703C36.0612 32.1172 35.8138 32.7227 35.4102 33.3867C35.0065 34.0508 34.4661 34.6888 33.7891 35.3008C33.125 35.8997 32.3307 36.401 31.4062 36.8047C30.4948 37.1953 29.4661 37.3906 28.3203 37.3906C26.888 37.3906 25.6315 37.1107 24.5508 36.5508C23.4831 35.9909 22.6497 35.2422 22.0508 34.3047C21.4648 33.3542 21.1719 32.293 21.1719 31.1211C21.1719 29.9883 21.3932 28.9922 21.8359 28.1328C22.2786 27.2604 22.9167 26.5378 23.75 25.9648C24.5833 25.3789 25.5859 24.9362 26.7578 24.6367C27.9297 24.3372 29.2383 24.1875 30.6836 24.1875H34.8828ZM56.875 32.8984V7H60.5078V37H57.1875L56.875 32.8984ZM42.6562 26.668V26.2578C42.6562 24.6432 42.8516 23.1784 43.2422 21.8633C43.6458 20.5352 44.2122 19.3958 44.9414 18.4453C45.6836 17.4948 46.5625 16.7656 47.5781 16.2578C48.6068 15.737 49.7526 15.4766 51.0156 15.4766C52.3438 15.4766 53.5026 15.7109 54.4922 16.1797C55.4948 16.6354 56.3411 17.306 57.0312 18.1914C57.7344 19.0638 58.2878 20.1185 58.6914 21.3555C59.0951 22.5924 59.375 23.9922 59.5312 25.5547V27.3516C59.388 28.901 59.1081 30.2943 58.6914 31.5312C58.2878 32.7682 57.7344 33.8229 57.0312 34.6953C56.3411 35.5677 55.4948 36.2383 54.4922 36.707C53.4896 37.1628 52.3177 37.3906 50.9766 37.3906C49.7396 37.3906 48.6068 37.1237 47.5781 36.5898C46.5625 36.056 45.6836 35.3073 44.9414 34.3438C44.2122 33.3802 43.6458 32.2474 43.2422 30.9453C42.8516 29.6302 42.6562 28.2044 42.6562 26.668ZM46.2891 26.2578V26.668C46.2891 27.7227 46.3932 28.7122 46.6016 29.6367C46.8229 30.5612 47.1615 31.375 47.6172 32.0781C48.0729 32.7812 48.6523 33.3346 49.3555 33.7383C50.0586 34.1289 50.8984 34.3242 51.875 34.3242C53.0729 34.3242 54.056 34.0703 54.8242 33.5625C55.6055 33.0547 56.2305 32.3841 56.6992 31.5508C57.168 30.7174 57.5326 29.8125 57.793 28.8359V24.1289C57.6367 23.4128 57.4089 22.7227 57.1094 22.0586C56.8229 21.3815 56.4453 20.7826 55.9766 20.2617C55.5208 19.7279 54.9544 19.3047 54.2773 18.9922C53.6133 18.6797 52.8255 18.5234 51.9141 18.5234C50.9245 18.5234 50.0716 18.7318 49.3555 19.1484C48.6523 19.5521 48.0729 20.112 47.6172 20.8281C47.1615 21.5312 46.8229 22.3516 46.6016 23.2891C46.3932 24.2135 46.2891 25.2031 46.2891 26.2578ZM79.4531 32.8984V7H83.0859V37H79.7656L79.4531 32.8984ZM65.2344 26.668V26.2578C65.2344 24.6432 65.4297 23.1784 65.8203 21.8633C66.224 20.5352 66.7904 19.3958 67.5195 18.4453C68.2617 17.4948 69.1406 16.7656 70.1562 16.2578C71.1849 15.737 72.3307 15.4766 73.5938 15.4766C74.9219 15.4766 76.0807 15.7109 77.0703 16.1797C78.0729 16.6354 78.9193 17.306 79.6094 18.1914C80.3125 19.0638 80.8659 20.1185 81.2695 21.3555C81.6732 22.5924 81.9531 23.9922 82.1094 25.5547V27.3516C81.9661 28.901 81.6862 30.2943 81.2695 31.5312C80.8659 32.7682 80.3125 33.8229 79.6094 34.6953C78.9193 35.5677 78.0729 36.2383 77.0703 36.707C76.0677 37.1628 74.8958 37.3906 73.5547 37.3906C72.3177 37.3906 71.1849 37.1237 70.1562 36.5898C69.1406 36.056 68.2617 35.3073 67.5195 34.3438C66.7904 33.3802 66.224 32.2474 65.8203 30.9453C65.4297 29.6302 65.2344 28.2044 65.2344 26.668ZM68.8672 26.2578V26.668C68.8672 27.7227 68.9714 28.7122 69.1797 29.6367C69.401 30.5612 69.7396 31.375 70.1953 32.0781C70.651 32.7812 71.2305 33.3346 71.9336 33.7383C72.6367 34.1289 73.4766 34.3242 74.4531 34.3242C75.651 34.3242 76.6341 34.0703 77.4023 33.5625C78.1836 33.0547 78.8086 32.3841 79.2773 31.5508C79.7461 30.7174 80.1107 29.8125 80.3711 28.8359V24.1289C80.2148 23.4128 79.987 22.7227 79.6875 22.0586C79.401 21.3815 79.0234 20.7826 78.5547 20.2617C78.099 19.7279 77.5326 19.3047 76.8555 18.9922C76.1914 18.6797 75.4036 18.5234 74.4922 18.5234C73.5026 18.5234 72.6497 18.7318 71.9336 19.1484C71.2305 19.5521 70.651 20.112 70.1953 20.8281C69.7396 21.5312 69.401 22.3516 69.1797 23.2891C68.9714 24.2135 68.8672 25.2031 68.8672 26.2578Z"
          fill="#0FBCF9"
        />
        <g filter="url(#filter0_f_708_21)">
          <path
            d="M34.2578 33.3867V22.5078C34.2578 21.6745 34.0885 20.9518 33.75 20.3398C33.4245 19.7148 32.9297 19.2331 32.2656 18.8945C31.6016 18.556 30.7812 18.3867 29.8047 18.3867C28.8932 18.3867 28.0924 18.543 27.4023 18.8555C26.7253 19.168 26.1914 19.5781 25.8008 20.0859C25.4232 20.5938 25.2344 21.1406 25.2344 21.7266H21.6211C21.6211 20.9714 21.8164 20.2227 22.207 19.4805C22.5977 18.7383 23.1576 18.0677 23.8867 17.4688C24.6289 16.8568 25.5143 16.375 26.543 16.0234C27.5846 15.6589 28.7435 15.4766 30.0195 15.4766C31.556 15.4766 32.9102 15.737 34.082 16.2578C35.2669 16.7786 36.1914 17.5664 36.8555 18.6211C37.5326 19.6628 37.8711 20.9714 37.8711 22.5469V32.3906C37.8711 33.0938 37.9297 33.8424 38.0469 34.6367C38.1771 35.431 38.3659 36.1146 38.6133 36.6875V37H34.8438C34.6615 36.5833 34.5182 36.0299 34.4141 35.3398C34.3099 34.6367 34.2578 33.9857 34.2578 33.3867ZM34.8828 24.1875L34.9219 26.7266H31.2695C30.2409 26.7266 29.3229 26.8112 28.5156 26.9805C27.7083 27.1367 27.0312 27.3776 26.4844 27.7031C25.9375 28.0286 25.5208 28.4388 25.2344 28.9336C24.9479 29.4154 24.8047 29.9818 24.8047 30.6328C24.8047 31.2969 24.9544 31.9023 25.2539 32.4492C25.5534 32.9961 26.0026 33.4323 26.6016 33.7578C27.2135 34.0703 27.9622 34.2266 28.8477 34.2266C29.9544 34.2266 30.931 33.9922 31.7773 33.5234C32.6237 33.0547 33.2943 32.4818 33.7891 31.8047C34.2969 31.1276 34.5703 30.4701 34.6094 29.832L36.1523 31.5703C36.0612 32.1172 35.8138 32.7227 35.4102 33.3867C35.0065 34.0508 34.4661 34.6888 33.7891 35.3008C33.125 35.8997 32.3307 36.401 31.4062 36.8047C30.4948 37.1953 29.4661 37.3906 28.3203 37.3906C26.888 37.3906 25.6315 37.1107 24.5508 36.5508C23.4831 35.9909 22.6497 35.2422 22.0508 34.3047C21.4648 33.3542 21.1719 32.293 21.1719 31.1211C21.1719 29.9883 21.3932 28.9922 21.8359 28.1328C22.2786 27.2604 22.9167 26.5378 23.75 25.9648C24.5833 25.3789 25.5859 24.9362 26.7578 24.6367C27.9297 24.3372 29.2383 24.1875 30.6836 24.1875H34.8828ZM56.875 32.8984V7H60.5078V37H57.1875L56.875 32.8984ZM42.6562 26.668V26.2578C42.6562 24.6432 42.8516 23.1784 43.2422 21.8633C43.6458 20.5352 44.2122 19.3958 44.9414 18.4453C45.6836 17.4948 46.5625 16.7656 47.5781 16.2578C48.6068 15.737 49.7526 15.4766 51.0156 15.4766C52.3438 15.4766 53.5026 15.7109 54.4922 16.1797C55.4948 16.6354 56.3411 17.306 57.0312 18.1914C57.7344 19.0638 58.2878 20.1185 58.6914 21.3555C59.0951 22.5924 59.375 23.9922 59.5312 25.5547V27.3516C59.388 28.901 59.1081 30.2943 58.6914 31.5312C58.2878 32.7682 57.7344 33.8229 57.0312 34.6953C56.3411 35.5677 55.4948 36.2383 54.4922 36.707C53.4896 37.1628 52.3177 37.3906 50.9766 37.3906C49.7396 37.3906 48.6068 37.1237 47.5781 36.5898C46.5625 36.056 45.6836 35.3073 44.9414 34.3438C44.2122 33.3802 43.6458 32.2474 43.2422 30.9453C42.8516 29.6302 42.6562 28.2044 42.6562 26.668ZM46.2891 26.2578V26.668C46.2891 27.7227 46.3932 28.7122 46.6016 29.6367C46.8229 30.5612 47.1615 31.375 47.6172 32.0781C48.0729 32.7812 48.6523 33.3346 49.3555 33.7383C50.0586 34.1289 50.8984 34.3242 51.875 34.3242C53.0729 34.3242 54.056 34.0703 54.8242 33.5625C55.6055 33.0547 56.2305 32.3841 56.6992 31.5508C57.168 30.7174 57.5326 29.8125 57.793 28.8359V24.1289C57.6367 23.4128 57.4089 22.7227 57.1094 22.0586C56.8229 21.3815 56.4453 20.7826 55.9766 20.2617C55.5208 19.7279 54.9544 19.3047 54.2773 18.9922C53.6133 18.6797 52.8255 18.5234 51.9141 18.5234C50.9245 18.5234 50.0716 18.7318 49.3555 19.1484C48.6523 19.5521 48.0729 20.112 47.6172 20.8281C47.1615 21.5312 46.8229 22.3516 46.6016 23.2891C46.3932 24.2135 46.2891 25.2031 46.2891 26.2578ZM79.4531 32.8984V7H83.0859V37H79.7656L79.4531 32.8984ZM65.2344 26.668V26.2578C65.2344 24.6432 65.4297 23.1784 65.8203 21.8633C66.224 20.5352 66.7904 19.3958 67.5195 18.4453C68.2617 17.4948 69.1406 16.7656 70.1562 16.2578C71.1849 15.737 72.3307 15.4766 73.5938 15.4766C74.9219 15.4766 76.0807 15.7109 77.0703 16.1797C78.0729 16.6354 78.9193 17.306 79.6094 18.1914C80.3125 19.0638 80.8659 20.1185 81.2695 21.3555C81.6732 22.5924 81.9531 23.9922 82.1094 25.5547V27.3516C81.9661 28.901 81.6862 30.2943 81.2695 31.5312C80.8659 32.7682 80.3125 33.8229 79.6094 34.6953C78.9193 35.5677 78.0729 36.2383 77.0703 36.707C76.0677 37.1628 74.8958 37.3906 73.5547 37.3906C72.3177 37.3906 71.1849 37.1237 70.1562 36.5898C69.1406 36.056 68.2617 35.3073 67.5195 34.3438C66.7904 33.3802 66.224 32.2474 65.8203 30.9453C65.4297 29.6302 65.2344 28.2044 65.2344 26.668ZM68.8672 26.2578V26.668C68.8672 27.7227 68.9714 28.7122 69.1797 29.6367C69.401 30.5612 69.7396 31.375 70.1953 32.0781C70.651 32.7812 71.2305 33.3346 71.9336 33.7383C72.6367 34.1289 73.4766 34.3242 74.4531 34.3242C75.651 34.3242 76.6341 34.0703 77.4023 33.5625C78.1836 33.0547 78.8086 32.3841 79.2773 31.5508C79.7461 30.7174 80.1107 29.8125 80.3711 28.8359V24.1289C80.2148 23.4128 79.987 22.7227 79.6875 22.0586C79.401 21.3815 79.0234 20.7826 78.5547 20.2617C78.099 19.7279 77.5326 19.3047 76.8555 18.9922C76.1914 18.6797 75.4036 18.5234 74.4922 18.5234C73.5026 18.5234 72.6497 18.7318 71.9336 19.1484C71.2305 19.5521 70.651 20.112 70.1953 20.8281C69.7396 21.5312 69.401 22.3516 69.1797 23.2891C68.9714 24.2135 68.8672 25.2031 68.8672 26.2578Z"
            fill="#0FBCF9"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_708_21"
            x="17.1719"
            y="3"
            width="69.9141"
            height="38.3906"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_708_21" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="button" @click="timerBool()">
    <svg width="100%" height="100%" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5898 8.5625V37H13.8789V8.5625H17.5898ZM26.7305 8.5625V11.6484H4.75781V8.5625H26.7305ZM34.3281 15.8672V37H30.6953V15.8672H34.3281ZM30.4219 10.2617C30.4219 9.67578 30.5977 9.18099 30.9492 8.77734C31.3138 8.3737 31.8477 8.17188 32.5508 8.17188C33.2409 8.17188 33.7682 8.3737 34.1328 8.77734C34.5104 9.18099 34.6992 9.67578 34.6992 10.2617C34.6992 10.8216 34.5104 11.3034 34.1328 11.707C33.7682 12.0977 33.2409 12.293 32.5508 12.293C31.8477 12.293 31.3138 12.0977 30.9492 11.707C30.5977 11.3034 30.4219 10.8216 30.4219 10.2617ZM43.7227 20.0664V37H40.0898V15.8672H43.5273L43.7227 20.0664ZM42.9805 25.6328L41.3008 25.5742C41.3138 24.1289 41.5026 22.7943 41.8672 21.5703C42.2318 20.3333 42.7721 19.2591 43.4883 18.3477C44.2044 17.4362 45.0964 16.7331 46.1641 16.2383C47.2318 15.7305 48.4688 15.4766 49.875 15.4766C50.8646 15.4766 51.776 15.6198 52.6094 15.9062C53.4427 16.1797 54.1654 16.6159 54.7773 17.2148C55.3893 17.8138 55.8646 18.582 56.2031 19.5195C56.5417 20.457 56.7109 21.5898 56.7109 22.918V37H53.0977V23.0938C53.0977 21.987 52.9089 21.1016 52.5312 20.4375C52.1667 19.7734 51.6458 19.2917 50.9688 18.9922C50.2917 18.6797 49.4974 18.5234 48.5859 18.5234C47.5182 18.5234 46.6263 18.7122 45.9102 19.0898C45.194 19.4674 44.6211 19.9883 44.1914 20.6523C43.7617 21.3164 43.4492 22.0781 43.2539 22.9375C43.0716 23.7839 42.9805 24.6823 42.9805 25.6328ZM56.6719 23.6406L54.25 24.3828C54.263 23.224 54.4518 22.1107 54.8164 21.043C55.194 19.9753 55.7344 19.0247 56.4375 18.1914C57.1536 17.3581 58.0326 16.7005 59.0742 16.2188C60.1159 15.724 61.3073 15.4766 62.6484 15.4766C63.7812 15.4766 64.7839 15.6263 65.6562 15.9258C66.5417 16.2253 67.2839 16.6875 67.8828 17.3125C68.4948 17.9245 68.957 18.7122 69.2695 19.6758C69.582 20.6393 69.7383 21.7852 69.7383 23.1133V37H66.1055V23.0742C66.1055 21.8893 65.9167 20.9714 65.5391 20.3203C65.1745 19.6562 64.6536 19.194 63.9766 18.9336C63.3125 18.6602 62.5182 18.5234 61.5938 18.5234C60.7995 18.5234 60.0964 18.6602 59.4844 18.9336C58.8724 19.207 58.3581 19.5846 57.9414 20.0664C57.5247 20.5352 57.2057 21.0755 56.9844 21.6875C56.776 22.2995 56.6719 22.9505 56.6719 23.6406ZM83.9766 37.3906C82.5052 37.3906 81.1706 37.1432 79.9727 36.6484C78.7878 36.1406 77.7656 35.431 76.9062 34.5195C76.0599 33.6081 75.4089 32.5273 74.9531 31.2773C74.4974 30.0273 74.2695 28.6602 74.2695 27.1758V26.3555C74.2695 24.6367 74.5234 23.1068 75.0312 21.7656C75.5391 20.4115 76.2292 19.2656 77.1016 18.3281C77.974 17.3906 78.9635 16.681 80.0703 16.1992C81.1771 15.7174 82.3229 15.4766 83.5078 15.4766C85.0182 15.4766 86.3203 15.737 87.4141 16.2578C88.5208 16.7786 89.4258 17.5078 90.1289 18.4453C90.832 19.3698 91.3529 20.4635 91.6914 21.7266C92.0299 22.9766 92.1992 24.3438 92.1992 25.8281V27.4492H76.418V24.5H88.5859V24.2266C88.5339 23.2891 88.3385 22.3776 88 21.4922C87.6745 20.6068 87.1536 19.8776 86.4375 19.3047C85.7214 18.7318 84.7448 18.4453 83.5078 18.4453C82.6875 18.4453 81.9323 18.6211 81.2422 18.9727C80.5521 19.3112 79.9596 19.819 79.4648 20.4961C78.9701 21.1732 78.5859 22 78.3125 22.9766C78.0391 23.9531 77.9023 25.0794 77.9023 26.3555V27.1758C77.9023 28.1784 78.0391 29.1224 78.3125 30.0078C78.599 30.8802 79.0091 31.6484 79.543 32.3125C80.0898 32.9766 80.7474 33.4974 81.5156 33.875C82.2969 34.2526 83.1823 34.4414 84.1719 34.4414C85.4479 34.4414 86.5286 34.181 87.4141 33.6602C88.2995 33.1393 89.0742 32.4427 89.7383 31.5703L91.9258 33.3086C91.4701 33.9987 90.8906 34.6562 90.1875 35.2812C89.4844 35.9062 88.6185 36.4141 87.5898 36.8047C86.5742 37.1953 85.3698 37.3906 83.9766 37.3906ZM100.031 19.1875V37H96.418V15.8672H99.9336L100.031 19.1875ZM106.633 15.75L106.613 19.1094C106.314 19.0443 106.027 19.0052 105.754 18.9922C105.493 18.9661 105.194 18.9531 104.855 18.9531C104.022 18.9531 103.286 19.0833 102.648 19.3438C102.01 19.6042 101.47 19.9688 101.027 20.4375C100.585 20.9062 100.233 21.4661 99.9727 22.1172C99.7253 22.7552 99.5625 23.4583 99.4844 24.2266L98.4688 24.8125C98.4688 23.5365 98.5924 22.3385 98.8398 21.2188C99.1003 20.099 99.4974 19.1094 100.031 18.25C100.565 17.3776 101.242 16.7005 102.062 16.2188C102.896 15.724 103.885 15.4766 105.031 15.4766C105.292 15.4766 105.591 15.5091 105.93 15.5742C106.268 15.6263 106.503 15.6849 106.633 15.75Z" fill="#0FBCF9"/>
<g filter="url(#filter0_f_749_3)">
<path d="M17.5898 8.5625V37H13.8789V8.5625H17.5898ZM26.7305 8.5625V11.6484H4.75781V8.5625H26.7305ZM34.3281 15.8672V37H30.6953V15.8672H34.3281ZM30.4219 10.2617C30.4219 9.67578 30.5977 9.18099 30.9492 8.77734C31.3138 8.3737 31.8477 8.17188 32.5508 8.17188C33.2409 8.17188 33.7682 8.3737 34.1328 8.77734C34.5104 9.18099 34.6992 9.67578 34.6992 10.2617C34.6992 10.8216 34.5104 11.3034 34.1328 11.707C33.7682 12.0977 33.2409 12.293 32.5508 12.293C31.8477 12.293 31.3138 12.0977 30.9492 11.707C30.5977 11.3034 30.4219 10.8216 30.4219 10.2617ZM43.7227 20.0664V37H40.0898V15.8672H43.5273L43.7227 20.0664ZM42.9805 25.6328L41.3008 25.5742C41.3138 24.1289 41.5026 22.7943 41.8672 21.5703C42.2318 20.3333 42.7721 19.2591 43.4883 18.3477C44.2044 17.4362 45.0964 16.7331 46.1641 16.2383C47.2318 15.7305 48.4688 15.4766 49.875 15.4766C50.8646 15.4766 51.776 15.6198 52.6094 15.9062C53.4427 16.1797 54.1654 16.6159 54.7773 17.2148C55.3893 17.8138 55.8646 18.582 56.2031 19.5195C56.5417 20.457 56.7109 21.5898 56.7109 22.918V37H53.0977V23.0938C53.0977 21.987 52.9089 21.1016 52.5312 20.4375C52.1667 19.7734 51.6458 19.2917 50.9688 18.9922C50.2917 18.6797 49.4974 18.5234 48.5859 18.5234C47.5182 18.5234 46.6263 18.7122 45.9102 19.0898C45.194 19.4674 44.6211 19.9883 44.1914 20.6523C43.7617 21.3164 43.4492 22.0781 43.2539 22.9375C43.0716 23.7839 42.9805 24.6823 42.9805 25.6328ZM56.6719 23.6406L54.25 24.3828C54.263 23.224 54.4518 22.1107 54.8164 21.043C55.194 19.9753 55.7344 19.0247 56.4375 18.1914C57.1536 17.3581 58.0326 16.7005 59.0742 16.2188C60.1159 15.724 61.3073 15.4766 62.6484 15.4766C63.7812 15.4766 64.7839 15.6263 65.6562 15.9258C66.5417 16.2253 67.2839 16.6875 67.8828 17.3125C68.4948 17.9245 68.957 18.7122 69.2695 19.6758C69.582 20.6393 69.7383 21.7852 69.7383 23.1133V37H66.1055V23.0742C66.1055 21.8893 65.9167 20.9714 65.5391 20.3203C65.1745 19.6562 64.6536 19.194 63.9766 18.9336C63.3125 18.6602 62.5182 18.5234 61.5938 18.5234C60.7995 18.5234 60.0964 18.6602 59.4844 18.9336C58.8724 19.207 58.3581 19.5846 57.9414 20.0664C57.5247 20.5352 57.2057 21.0755 56.9844 21.6875C56.776 22.2995 56.6719 22.9505 56.6719 23.6406ZM83.9766 37.3906C82.5052 37.3906 81.1706 37.1432 79.9727 36.6484C78.7878 36.1406 77.7656 35.431 76.9062 34.5195C76.0599 33.6081 75.4089 32.5273 74.9531 31.2773C74.4974 30.0273 74.2695 28.6602 74.2695 27.1758V26.3555C74.2695 24.6367 74.5234 23.1068 75.0312 21.7656C75.5391 20.4115 76.2292 19.2656 77.1016 18.3281C77.974 17.3906 78.9635 16.681 80.0703 16.1992C81.1771 15.7174 82.3229 15.4766 83.5078 15.4766C85.0182 15.4766 86.3203 15.737 87.4141 16.2578C88.5208 16.7786 89.4258 17.5078 90.1289 18.4453C90.832 19.3698 91.3529 20.4635 91.6914 21.7266C92.0299 22.9766 92.1992 24.3438 92.1992 25.8281V27.4492H76.418V24.5H88.5859V24.2266C88.5339 23.2891 88.3385 22.3776 88 21.4922C87.6745 20.6068 87.1536 19.8776 86.4375 19.3047C85.7214 18.7318 84.7448 18.4453 83.5078 18.4453C82.6875 18.4453 81.9323 18.6211 81.2422 18.9727C80.5521 19.3112 79.9596 19.819 79.4648 20.4961C78.9701 21.1732 78.5859 22 78.3125 22.9766C78.0391 23.9531 77.9023 25.0794 77.9023 26.3555V27.1758C77.9023 28.1784 78.0391 29.1224 78.3125 30.0078C78.599 30.8802 79.0091 31.6484 79.543 32.3125C80.0898 32.9766 80.7474 33.4974 81.5156 33.875C82.2969 34.2526 83.1823 34.4414 84.1719 34.4414C85.4479 34.4414 86.5286 34.181 87.4141 33.6602C88.2995 33.1393 89.0742 32.4427 89.7383 31.5703L91.9258 33.3086C91.4701 33.9987 90.8906 34.6562 90.1875 35.2812C89.4844 35.9062 88.6185 36.4141 87.5898 36.8047C86.5742 37.1953 85.3698 37.3906 83.9766 37.3906ZM100.031 19.1875V37H96.418V15.8672H99.9336L100.031 19.1875ZM106.633 15.75L106.613 19.1094C106.314 19.0443 106.027 19.0052 105.754 18.9922C105.493 18.9661 105.194 18.9531 104.855 18.9531C104.022 18.9531 103.286 19.0833 102.648 19.3438C102.01 19.6042 101.47 19.9688 101.027 20.4375C100.585 20.9062 100.233 21.4661 99.9727 22.1172C99.7253 22.7552 99.5625 23.4583 99.4844 24.2266L98.4688 24.8125C98.4688 23.5365 98.5924 22.3385 98.8398 21.2188C99.1003 20.099 99.4974 19.1094 100.031 18.25C100.565 17.3776 101.242 16.7005 102.062 16.2188C102.896 15.724 103.885 15.4766 105.031 15.4766C105.292 15.4766 105.591 15.5091 105.93 15.5742C106.268 15.6263 106.503 15.6849 106.633 15.75Z" fill="#0FBCF9"/>
</g>
<defs>
<filter id="filter0_f_749_3" x="0.757812" y="4.17188" width="109.875" height="37.2188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_749_3"/>
</filter>
</defs>
</svg>
</div>
  </article>
</template>

<script setup>
import { ref } from "vue";
let user = ref("");
let pass1 = ref("");
let toggleInscriptionIssues = ref(null);
let urlConnexion = "http://localhost:4000/users/connexion";
let urlPost = "http://localhost:4000/post/add";
let urlGet = "http://localhost:4000/post/find/";
let urlSupp = "http://localhost:4000/post/supp/";
let urlmodifStatut = "http://localhost:4000/post/status/";
let token = ref("");
let userId = ref("");
let formConnect = ref(false);
let formPostAdd = ref(false);
let timerBloc=ref(false)
let titlePost = ref("");
let textPost = ref("");
let status = ref("1");
let statusModifClick = ref("");
let arrayPostit = ref();
function submitInscription() {
  fetch(urlConnexion, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ username: user.value, password: pass1.value }),
  })
    .then((res) => res.json())
    .then((res) => {
      (token.value = res.token), (userId.value = res.userId);
      console.log(res.code, res.token, res.userId);
      if (res.code == 401) {
        toggleInscriptionIssues.value = true;
      } else {
        toggleInscriptionIssues.value = false;
        formConnect.value = !formConnect.value;
        getAll();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
/*add post*/
function submitPost() {
  fetch(urlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer" + " " + token.value,
    },
    body: JSON.stringify({
      title: titlePost.value,
      text: textPost.value,
      status: status.value,
      id_user: userId.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code == 401) {
        console.log(res);
        console.log(res.code);
      } else {
        getAll();
        formPostAdd.value=false
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
/*add post*/
/*get ALL post*/
function getAll() {
  fetch(urlGet + userId.value, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer" + " " + token.value,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      arrayPostit.value = res;
      console.log(arrayPostit.value);
    })
    .catch((err) => {
      console.log(err);
    });
}

/*add post*/
function addPostForm() {
  formPostAdd.value = !formPostAdd.value;
}
/*supp*/
function suppPost(id) {
  console.log(id);
  fetch(urlSupp + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer" + " " + token.value,
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code == 401) {
        console.log(res, res.code);
      } else {
        getAll();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
/*supp*/
/*modif statut*/
function modifPostStatus(id, statusPostClick) {
  console.log(statusModifClick);
  console.log(id);
  fetch(urlmodifStatut + id, {
    method: "PUT",
    headers: {
      Authorization: "Bearer" + " " + token.value,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      status: statusPostClick,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code == 401) {
        console.log(res, res.code);
      } else {
        getAll();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

/*modif statut*/
/*timer bloc*/
function timerBool(){
timerBloc.value=!timerBloc.value
}

</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
.formSignUp {
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  animation: fade-in linear forwards 0.5s;
  @keyframes fade-in {
    from {
      transform: translate(-20vw);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translate(0vw);
    }
  }
  .cross {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 30vw;
    border-bottom: solid 1px white;
    height: 100px;
    color: white;
    margin: 2.5rem;
  }
  button {
    width: 200px;
    height: 60px;
    border: solid 1px white;
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
  .passwordKo {
    color: white;
    width: 250px;
    padding: 2rem;
    background-color: #c0392b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
}
.getAll {
  width: 100%;
  min-height: 100vh;
  background-color: #171821;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .contener-post {
    min-height: 80vh;
    border-radius: 5px;
    width: 25vw;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #171821;
    &.contener-post:nth-child(1) {
      margin-left: 10rem;
    }
    p {
      color: whitesmoke;
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 5px;
    }
    .post {
      width: 90%;
      position: relative;
      height: auto;
      background-color: #13151B;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 2rem;
      border: solid 1px #0fbcf9;
      border-radius: 5px;
      .crossSup {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 20px;
        height: 20px;
       transition: ease-in-out 0.5s;
&:hover{
  cursor: pointer;
  transform: scale(1.1);
}
      }
      .title-post {
        font-size: 1.5rem;
        margin: 2rem;
      }
      .text-post {
        font-size: 1rem;
        align-self: flex-start;
        margin: 1rem;
      }
    }
  }
}
.dashboard {
  width: 10vw;
  min-height: 100vh;
  border: 2px solid;
  border-right-color: #0fbcf9;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #13151B;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
  .button {
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
   background: linear-gradient(145deg, #14161d, #111318);
box-shadow:  20px 20px 38px #0c0e12,
             -20px -20px 38px #1a1c24;
    &:hover {
      cursor: pointer;
 background: #13151B;
box-shadow: inset 20px 20px 38px #0c0e12,
            inset -20px -20px 38px #1a1c24;
    }
  }
}
.addPost {
  position: fixed;
  width: 100%;
  min-height: 100vh;
   background-color: #171821;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 30vw;
    border-bottom: solid 1px #0fbcf9;
    height: 100px;
    color: white;
    margin: 2.5rem;
  }
  textarea {
    border-top: none;
    border-left: none;
    border-right: none;
    resize: none;
    width: 30vw;
    border-bottom: solid 1px #0fbcf9;
    min-height: 40vh;
    background-color: transparent;
    color: white;
  }
  button {
    width: 200px;
    height: 60px;
    border: solid 1px #0fbcf9;
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
}
.progress-button{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
.post-status{
  border: solid 1px #0fbcf9;
  border-radius: 5px;
padding: 1rem;
transition: ease-in-out 0.5s;
&:hover{
  cursor: pointer;
  transform: scale(1.1);
}
}
}
.timer{
  min-height: 100vh;
  width: 100%;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
}
</style>
