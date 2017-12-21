namespace Backend.Controllers
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

      public User()
      {

      }

      public User(int id, string firstName, string lastName, string email, string password)
      {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
      }
    }
}
