using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
  public class User
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    

  //   public User(int id, string firstName, string lastName, string email, string password, string confirmPassword)
  //   {
  //     this.Id = id;
  //     this.FirstName = firstName;
  //     this.LastName = lastName;
  //     this.Email = email;
  //     this.Password = password;
  //     this.ConfirmPassword = confirmPassword;
  //   }
  }
}
