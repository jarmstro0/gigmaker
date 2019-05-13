class Api::V1::ActsController < ApplicationController

def index
  selected = Act.all
  puts selected
  render json: {
    selected: ActiveModel::Serializer::CollectionSerializer.new(selected, serializer: ActMatchSerializer)
  }
end

end
