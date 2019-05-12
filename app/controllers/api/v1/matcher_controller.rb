class Api::V1::MatcherController < ApplicationController

  def venues
      venuematch = Venue.all
      act_search = Act.where(user_id: current_user.id)
      render json: {
        act_search: ActiveModel::Serializer::CollectionSerializer.new(act_search, serializer: ActSearchSerializer),
        venuematch: ActiveModel::Serializer::CollectionSerializer.new(venuematch, serializer: VenueMatchSerializer)
      }
  end

  def acts
      actmatch = Act.all
      venue_search = Venue.where(user_id: current_user.id)
      render json: {
        venue_search: ActiveModel::Serializer::CollectionSerializer.new(venue_search, serializer: VenueSearchSerializer),
        actmatch: ActiveModel::Serializer::CollectionSerializer.new(actmatch, serializer: ActMatchSerializer)
      }
  end

end
