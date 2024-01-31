import React, { useState } from 'react';
// import './Feedback.css'; // Import the CSS file for styling

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comments: '',
      submitted: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like submitting the form data to a server
    // For simplicity, we'll just log the form data to the console
    console.log('Name:', this.state.name);
    console.log('Email:', this.state.email);
    console.log('Comments:', this.state.comments);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        {this.state.submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                value={this.state.comments}
                onChange={(e) => this.setState({ comments: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default FeedbackForm;
