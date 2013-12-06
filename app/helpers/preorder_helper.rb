module PreorderHelper
  def like_button
    raw "<div class=\"fb-like\" data-href=\"https://facebook.com/pikmoments\" data-width=\"100\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"true\" data-share=\"false\"></div>"
  end

  def pin_it_button    
      image_url = URI.encode("#{request.scheme}://#{request.host}#{image_path(Settings.product_image_path)}")
      raw "<a href='http://pinterest.com/pin/create/button/?url=#{encoded_root_url}&media=#{image_url}&description=PikMoments%20%3A%20Capture%20amazing%20photographs%20automatically' class='pin-it-button' count-layout='vertical'><img border='0' src='//assets.pinterest.com/images/PinExt.png' title='Pin It' /></a>"
  end
  
  def tweet_button
    raw "<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"https://www.pikmoments.com\"  data-text=\"PikMoments : Capture amazing moments automatically!\" data-via=\"pikmoments\" data-hashtags=\"pikmoments\">Tweet</a>"
  end

  def video_url
    "#{Settings.video_embed_url}?" + case Settings.video_embed_url
    when /vimeo/
      'title=0&byline=0&portrait=0&autoplay=0'
    when /youtube/
      'autohide=1&showinfo=0&rel=0&autoplay=0'
    else
      ''
    end
  end

  def encoded_root_url
   raw URI.encode "#{request.scheme}://#{request.host}/preorder"
  end

  def sold_out(payment_option)
    payment_option.limit > -1 and order_count(payment_option) >= payment_option.limit
  end

  def order_count(payment_option)
    Order.where(payment_option_id: payment_option).count(:token) # count of orders that have a token from amazon and are for this payment option
  end
end
