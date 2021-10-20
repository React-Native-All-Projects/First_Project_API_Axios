using API_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestAPIController : Controller
    {
        [HttpGet]
        public object Welcome()
        {
            return "Good Luck My Team *_^";
        }

        //---------------------------------------------------------------------Functions For Test ********************
        //---------------------------------------------------------------------Get
        [HttpGet]
        [Route("Get")]
        public object Get()
        {
            return BadRequest();
            return new { Get = "Get Method" };
        }
        [HttpGet]
        [Route("GetWithURL/{data}")]
        public object GetGetWithURL(string data)
        {
            return new { Get = "data is : " + data };
        }

        //---------------------------------------------------------------------Post
        [HttpPost]
        [Route("Post")]
        public object Post()
        {
            return new { Post = "Post Method" };
        }

        [HttpPost]
        [Route("PostWithBody")]
        public object PostWithBody(LogIn model)
        {
            return model;
        }

        //---------------------------------------------------------------------Put
        [HttpPut]
        [Route("Put")]
        public object Put()
        {
            return new { Put = "Put Method" };
        }
        [HttpPut]
        [Route("PutWithBody")]
        public object PutWithBody(LogIn model)
        {
            return model;
        }

        //---------------------------------------------------------------------Delete
        [HttpDelete]
        [Route("DeleteWithURL/{Id}")]
        public object DeleteWithURL(int Id)
        {
            return new { Id = Id };
        }
    }
}
