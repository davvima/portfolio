import imageVideogames from '../media/work-videogames.png'
import imageFood from '../media/work-food.png'
import imageNetglix from '../media/work netglix.png'
import imagePaloma from '../media/work-paloma.png'



export const data = [
    {
        title:'PlayApp',
        image:imageVideogames,
        description:<p>"PlayApp" is a Single Page Application (SPA) developed as part of a 3-week challenge at Henry Bootcamp.<br /><br />
        • I used React for the Front End and Redux for state management.<br />
        • The project includes:<br />
        - A search bar that finds videgames by its name<br />
        - Pagination that shows 15 different videogames per page. <br />
        - Individual pages with details about the selected item.<br />
        - Functionalities such as sorting, filtering and a form that allows users to create a new videogame.<br />
        • All components were stilized with pure CSS.<br />
        • The App consumes data from the RAWG API through a backend developed in Node JS, using Express.<br />
        • For the database was created in PostgreSQL and Sequelize as ORM.<br />
        </p>,

        categories:['FullStack','React','Redux','Node.js','Postgres','RestAPI','Academic'],
        link:''
    },
    {
        title:'FoodApp',
        image:imageFood,
        description:<p>'FoodApp' is a Single Page Application (SPA) developed as a personal project.<br /><br />
        • I used React for the Front End and Redux for state management.<br />
        • The project includes:<br />
        - A search bar that finds recipes by its name<br />
        - Pagination that shows 9 different recipes per page. <br />
        - Individual pages with details about the selected item.<br />
        - Functionalities such as sorting, filtering and a form that allows users to create a new recipe.<br />
        • All components were stilized with pure CSS.<br />
        • The App consumes data from the Spooncular API through a backend developed in Node JS, using Express.<br />
        • For the database was created in PostgreSQL and Sequelize as ORM.<br />
        </p>,
        categories:['FullStack','React','Redux','Node.js','Postgres','RestAPI'],
        link:''
    },
    {
        title:'Netglix',
        image:imageNetglix,
        description:<p>'Netglix', is a Single Page Application (SPA) developed as a personal project.<br /><br />
        • I used React for the Front End and Redux for state management. All components were developed with pure CSS.<br />
        • The SPA consumes data from the Movie DataBase API through a backend developed in Node JS, using Express.<br />
        • For the database I used MySQL.<br />
        • The project includes functionalities such as a register and login page, a search input, a details page to see information of the selected movie, and allows you to create new content and manage users through an administration panel.</p>,
        categories:['React','Redux','Express','MySQL','RestAPI'],
        link:'https://netglix.vercel.app/'
    },
    {
        title:'Paloma Bakery',
        image:imagePaloma,
        description:<p>This is a Landing Page developed for a coffee store, as part of a sales funnel to convert prospects into customers.<br /><br />
        </p>,
        categories:['FrontEnd','LandingPage','HTML','CSS','Freelance'],
        link:'https://palomabakery.online'
    },
 
]