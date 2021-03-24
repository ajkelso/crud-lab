import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  getReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.getReviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: reviewData => dispatch({type: 'ADD_REVIEW', review: reviewData}),
    deleteReview: reviewId => dispatch({ type: 'DELETE_REVIEW', reviewId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
