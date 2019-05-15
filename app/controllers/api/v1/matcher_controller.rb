class Api::V1::MatcherController < ApplicationController

  def venues
      venue_match = Venue.available_on(params[:date])
      act_search = Act.where(user_id: current_user.id)
      render json: {
        act_search: ActiveModel::Serializer::CollectionSerializer.new(act_search, serializer: ActSearchSerializer),
        venuematch: ActiveModel::Serializer::CollectionSerializer.new(venue_match, serializer: VenueMatchSerializer)
      }
  end

  def acts
      act_match = Act.available_on(params[:date])
      venue_search = Venue.where(user_id: current_user.id)
      render json: {
        venue_search: ActiveModel::Serializer::CollectionSerializer.new(venue_search, serializer: VenueSearchSerializer),
        actmatch: ActiveModel::Serializer::CollectionSerializer.new(act_match, serializer: ActMatchSerializer)
      }
  end

end
