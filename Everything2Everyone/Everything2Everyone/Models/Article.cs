﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Everything2Everyone.Models
{
    public class Article
    {
        [Key]
        public int ArticleID { get; set; }

        [Required(ErrorMessage = "Category is required.")]
        public int? CategoryID { get; set; }

        public string? UserID { get; set; }

        [Required(ErrorMessage = "Title is required. Length must be between 3 and 50 characters.")]
        [MaxLength(50, ErrorMessage = "Title is required. Length must be between 3 and 50 characters.")]
        [MinLength(3, ErrorMessage = "Title is required. Length must be between 3 and 50 characters.")]
        public string Title { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy - HH:mm}")]
        public DateTime PublicationDate { get; set; }

        [Required(ErrorMessage = "Commit Title is required. Length must be between 3 and 20 characters.")]
        [MaxLength(20, ErrorMessage = "Commit Title is required. Length must be between 3 and 20 characters.")]
        [MinLength(3, ErrorMessage = "Commit Title is required. Length must be between 3 and 20 characters.")]
        public string CommitTitle { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd.MM.yyyy - HH:mm}")]
        public DateTime CommitDate { get; set; }

        public bool IsRestricted { get; set; }

        public virtual Category? Category { get; set; }

        public virtual User? User { get; set; }

        public virtual ICollection<Comment>? Comments { get; set; }

        public virtual ICollection<Chapter>? Chapters { get; set; }

        public virtual ICollection<ArticleVersion>? Versions { get; set; }
    }
}
