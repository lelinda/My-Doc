using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route ("api/users")]
    public class UsersController : Controller
    {
        private readonly UserContext _context;

        public UsersController (UserContext context)
        {
            _context = context;

            if (_context.Users.Count () == 0)
            {
                _context.Users.Add (new User () { Id = 1, FirstName = "Linda", LastName = "Le", Email = "lindale@gmail.com", Password = "abc123", ConfirmPassword = "abc123" });
                _context.Users.Add (new User () { Id = 2, FirstName = "Darlene", LastName = "Kim", Email = "darlenekim@gmail.com", Password = "abc123", ConfirmPassword = "abc123" });
                _context.Users.Add (new User () { Id = 3, FirstName = "Ryan", LastName = "Field", Email = "ryanfield@gmail.com", Password = "abc123", ConfirmPassword = "abc123" });
                _context.Users.Add (new User () { Id = 4, FirstName = "Bob", LastName = "Bob", Email = "bob@gmail.com", Password = "bob", ConfirmPassword = "bob" });

                _context.SaveChanges ();
            }

        }

        // GET api/values
        [HttpGet]
        public List<User> Get ()
        {
            return _context.Users.ToList ();
        }

        // GET api/values
        [HttpGet ("{id}")]
        public User Get (int id)
        {
            foreach (User u in _context.Users)
            {
                if (u.Id == id)
                {
                    return u;
                }
            }
            return null;
        }

        // POST api/values
        [HttpPost]
        public User Post ([FromBody] User u)
        {
            // Only add users if all objects has values & if password value is the same as confirm password value; otherwise, user will not be added
            if (u.FirstName != null && u.FirstName != "" && u.LastName != null && u.LastName != "" && u.Email != null && u.Email != "" && u.Password != null && u.Password != "" && u.ConfirmPassword != null && u.ConfirmPassword != "" && u.Password == u.ConfirmPassword)
            {
                u.Id = _context.Users.Count () + 1;
                _context.Users.Add (u);
                _context.SaveChanges ();
                return u;
            }
            return null;
        }

        // PUT api/values
        [HttpPut ("{id}")]
        public User Put (int id, [FromBody] User user)
        {
            foreach (User u in _context.Users)
            {
                if (u.Id == id)
                {
                    _context.Users.Remove (u);
                    _context.SaveChanges ();
                    _context.Users.Add (user);
                    _context.SaveChanges ();
                    return user;
                }
            }
            return null;
        }

        // DELETE api/values
        [HttpDelete ("{id}")]
        public void Delete (int id)
        {
            foreach (User s in _context.Users)
            {
                if (s.Id == id)
                {
                    _context.Users.Remove (s);
                    _context.SaveChanges ();
                }
            }
        }
    }
}