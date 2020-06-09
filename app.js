let resume = {
    Name: 'adam m. troncale',
    Career: 'Full Stack Engineer',
    Description: 'All-Around Good Guy'
  }
  
  console.log(         
    'Name: ' + resume.Name.toUpperCase() + "\n" +
    'Career: ' + resume.Career + "\n" +
    'Description: ' + resume.Description
  );
  
  let myInterests = ['Sports', 'Cooking', 'Painting']
  console.log('');
  console.log('My Interests:');
  console.log(
    '* ' + myInterests[0] + "\n" +
    '* ' + myInterests[1] + "\n" +
    '* ' + myInterests[2] + "\n"
  );
  
  console.log('');
  
  console.log('My Previous Experience:');
  
  function displayPosition(company, title, description) {
    console.log(
      '* ' + company + ' | ' + 
      title + ' | ' +
      description
    );
  }
  
  displayPosition('Interstar Transportation', 'National Acount Manager', 'Sales');
  
  displayPosition('Greenway Health', 'Customer Support Manager', 'Support/Management');
  
  displayPosition('Smith & Ely, LLC', 'Investigator/Paralegal', 'Insurance Defense');
  
  console.log('');
  
  function displaySkill(name, boolean) {
    if (boolean == true) {
      console.log('* BAM: ' + name);
    } else {
      console.log('* ' + name);
    }
  }
  
  displaySkill('Painting', true);
  displaySkill('Proctologist', false);
  displaySkill('Internet', false);
  displaySkill('Sales', true);
  displaySkill('Writing', true);
  displaySkill('Garbage Collection', false);