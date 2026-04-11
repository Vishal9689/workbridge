package com.workbridge.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;
    private int price;
    private String timeline;
    private String status;
    private String user_email;
    private String freelancer_email;
    
    @Column(name = "file_url")
    private String file_url;
    
    private String instructions;
    private int progress;
    private String payment_status;
    private String submission_file;   // final work file
    private String approval_status;   // PENDING / APPROVED / REJECTED
    private String freelancer_upi;

    // GETTERS + SETTERS

  

	public void setFreelancer_upi(String freelancer_upi) {
		this.freelancer_upi = freelancer_upi;
	}

	public int getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public String getTimeline() { return timeline; }
    public void setTimeline(String timeline) { this.timeline = timeline; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getUser_email() { return user_email; }
    public void setUser_email(String user_email) { this.user_email = user_email; }

    public String getFreelancer_email() { return freelancer_email; }
    public void setFreelancer_email(String freelancer_email) { this.freelancer_email = freelancer_email; }

    public String getFile_url() { return file_url; }
    public void setFile_url(String file_url) { this.file_url = file_url; }

    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) { this.instructions = instructions; }

    public int getProgress() { return progress; }
    public void setProgress(int progress) { this.progress = progress; }

    public String getPayment_status() { return payment_status; }
    public void setPayment_status(String payment_status) { this.payment_status = payment_status; }

	public String getSubmission_file() {
		return submission_file;
	}

	public void setSubmission_file(String submission_file) {
		this.submission_file = submission_file;
	}

	public String getApproval_status() {
		return approval_status;
	}

	public void setApproval_status(String approval_status) {
		this.approval_status = approval_status;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	  public String getFreelancer_upi() {
			return freelancer_upi;
		}
    
    
}