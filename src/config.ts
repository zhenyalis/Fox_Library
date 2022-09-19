export const fetchData = async () => {
         try {
             const res = await fetch('https://fox-library-api.herokuapp.com/api/library');
             const data = await res.json();
         
         }   catch (e) {
             console.log(e)
            }   
     }


// 'https://fox-library-api.herokuapp.com/api/library'