import HomeItems from "../../components/HomeItems/homeItems";

const Home = () => {
  return  <>
          <HomeItems
            UrlImage='/ToDo.png'
            Description='Discover the efficiency of our ToDo table on TashHhub. Organize your tasks with ease: "ToDo" for pending, 
            "InProgress" for current and "Complete" for wins. Manage your project effectively with us! 🚀 #SimpleOrganization #ImparableProductivity.'>          </HomeItems>
          <HomeItems
            UrlImage='/ToDo2.png'
            Description='Experience the power of ultimate customization with our ToDo solution! Tailor your task management experience to fit your unique style.
             From personalized categories to flexible priority settings, take control of your productivity like never before. Embrace efficiency with
              a ToDo platform that adapts to your needs seamlessly. Your tasks, your way. Start customizing today!'>
          </HomeItems>
          </>
       };           

export default Home;
