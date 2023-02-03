using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string project { get; set; }
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string final { get; set; }
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100.")]
        [Required]
        public string intex { get; set; }

    }
}
