/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/denisefafette
*/

axios.get('https://api.github.com/users/denisefafette')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/*
avatar_url: "https://avatars2.githubusercontent.com/u/42308037?v=4"
bio: "Connector of people, ideas and design"
blog: ""
company: "Fafette Design Solutions"
created_at: "2018-08-12T02:15:49Z"
email: null
events_url: "https://api.github.com/users/DeniseFafette/events{/privacy}"
followers: 9
followers_url: "https://api.github.com/users/DeniseFafette/followers"
following: 9
following_url: "https://api.github.com/users/DeniseFafette/following{/other_user}"
gists_url: "https://api.github.com/users/DeniseFafette/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/DeniseFafette"
id: 42308037
location: "SF Bay Area"
login: "DeniseFafette"
name: "Denise Fafette"
node_id: "MDQ6VXNlcjQyMzA4MDM3"
organizations_url: "https://api.github.com/users/DeniseFafette/orgs"
public_gists: 0
public_repos: 30
received_events_url: "https://api.github.com/users/DeniseFafette/received_events"
repos_url: "https://api.github.com/users/DeniseFafette/repos"
site_admin: false
starred_url: "https://api.github.com/users/DeniseFafette/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/DeniseFafette/subscriptions"
type: "User"
updated_at: "2019-10-25T15:06:34Z"
url: "https://api.github.com/users/DeniseFafette"
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/denisefafette/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/AaronShawnSoler','https://api.github.com/users/fishmanjohn','https://api.github.com/users/Rae-Glazier','https://api.github.com/users/coltynw','https://api.github.com/users/luminatrix',];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function GitCard(gitHubProfile) {
  const newCard = document.createElement('div'),
        newImage = document.createElement('img'),
        newInfo = document.createElement('div');
        newName = document.createElement('p');
        newUserName = document.createElement('a');
        newLocation = document.createElement('p');
        newProfile = document.createElement('p');
        newFollowers = document.createElement('p');
        newFollowing = document.createElement('p');
        newBio = document.createElement('p');
  
        newImage.src = 'avatar_url';
        newName.textContent = 'name';
        newUser.textContent = 'login';
        newLocation.textContent = 'location';
        newProfile.src = 'html_url';
        newFollwers.textContent = 'followers';
        newFollowing.textContent = 'following';
        newBio.textContent = 'bio';

        newCard.classList.add('card');
        newInfo.classList.add('card-info');
        newName.classList.add('name');
        newUserName.classList.add('username');

        newCard.appendChild(newImage);
        newCard.appendChild(newInfo);
        newInfo.appendChild(newName);
        newInfo.appendChild(newUserName);
        newInfo.appendChild(newLocation);
        newInfo.appendChild(newProfile);
        newInfo.appendChild(newFollowers);
        newInfo.appendChild(newFollowing);
        newInfo.appendChild(newBio);
  
  return GitCard;
}

const gitCardsEntryPoint = document.querySelector('.card');

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
