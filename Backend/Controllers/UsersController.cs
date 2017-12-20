using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
                User u = new User();
                u.Id = 1;
                u.FirstName = "Linda";
                u.LastName = "Le";
                u.Email = "lle@yahoo.com";
                u.Password = "abc123";


                _context.Users.Add(u);
                _context.SaveChanges();
            }

        }

        // GET api/values
        [HttpGet]
        public List<User> Get()
        {
            return _context.Users.ToList();
        }

        //// GET api/values/5
        [HttpGet("{id}")]
        public User Get(int id)
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

        //// POST api/values
        [HttpPost]
        public void Post([FromBody]User value)
        {
            _context.Users.Add(value);
            _context.SaveChanges();
        }

        //// PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]User value)
        {
            foreach (User u in _context.Users)
            {
                if (u.Id == id)
                {
                    _context.Users.Remove(u);
                    _context.SaveChanges();
                    _context.Users.Add(value);
                    _context.SaveChanges();

                    return;
                }
            }
        }

        //// DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            foreach (User s in _context.Users)
            {
                if (s.Id == id)
                {
                    _context.Users.Remove(s);
                    _context.SaveChanges();

                    return;
                }
            }
        }
    }
}
