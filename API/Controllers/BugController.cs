using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BugController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest(){
            return BadRequest(new ProblemDetails{Title= "This is a Bad Request"});
        }
        [HttpGet("unathorised")]
        public ActionResult GetUnauthorised(){
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem1", "This is 1st problem");
            ModelState.AddModelError("Problem2", "This is 2nd problem");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw new Exception("This is a server error");
        }
    }
}