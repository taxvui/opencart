function getURLVar(key) {
    var value = [];
    var query = String(document.location).split('?');
    if (query[1]) {
        var part = query[1].split('&');
        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');
            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
}
$(document).ready(function() {
    $('button[type=\'submit\']').on('click', function() {
        $("form[id*='form-']").submit();
    });
    $('.text-danger').each(function() {
        var element = $(this).parent().parent();
        if (element.hasClass('form-group')) {
            element.addClass('has-error');
        }
    });
    $('[data-toggle=\'tooltip\']').tooltip({
        container: 'body',
        html: true
    });
    $(document).ajaxStop(function() {
        $('[data-toggle=\'tooltip\']').tooltip({
            container: 'body'
        });
    });
    $.event.special.remove = {
        remove: function(o) {
            if (o.handler) {
                o.handler.apply(this, arguments);
            }
        }
    }
    $('[data-toggle=\'tooltip\']').on('remove', function() {
        $(this).tooltip('destroy');
    });
    
    $(document).on('click', '[data-toggle=\'image\']', function(e) {
        e.preventDefault();
        var element = this;
        $('#form-upload').remove();
        $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="image" value="" /></form>');
        $('#form-upload input[name=\'image\']').trigger('click');
        if (typeof timer != 'undefined') {
            clearInterval(timer);
        }
        timer = setInterval(function() {
            if ($('#form-upload input[name=\'image\']').val() != '') {
                clearInterval(timer);
                $.ajax({
                    url: 'index.php?route=common/image',
                    type: 'post',
                    data: new FormData($('#form-upload')[0]),
                    dataType: 'json',
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: function() {
                        $(element).button('loading');
                    },
                    complete: function() {
                        $(element).button('reset');
                    },
                    success: function(json) {
                        if (json['error']) {
                            alert(json['error']);
                        }
                        if (json['filename']) {
                            $($(element).attr('data-target')).attr('value', json['filename']);
                        }
                        if (json['image']) {
                            $($(element).attr('data-image')).attr('src', json['image']);
                        }
                        if (json['thumb']) {
                            $($(element).attr('data-thumb')).attr('src', json['thumb']);
                        }
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    }
                });
            }
        }, 500);
    });
    $(document).on('click', '[data-toggle=\'clear\']', function() {
        $($(this).attr('data-target')).attr('value', '');
        $($(this).attr('data-thumb')).attr('src', $(this).attr('data-placeholder'));
    });
    $('#float-switch').click(function() {
        if ($('#float-menu').hasClass('open')) {
            $('#float-menu').removeClass('open');
            $(this).removeClass('open');
            $('i', this).removeClass('fa-close');
            $('i', this).addClass('fa-indent');
        } else {
            $('#float-menu').addClass('open');
            $(this).addClass('open');
            $('i', this).removeClass('fa-indent');
            $('i', this).addClass('fa-close');
        }
    });
    $('.subscribe').on('click', function() {
        var element = this;
        var url = '';
        var email = $(this).parent().parent().find('input[name="newsletter"]').val();
        if (email != undefined) {
            url += '&email=' + encodeURIComponent(email);
        }
        $.ajax({
            url: 'index.php?route=cms/newsletter' + url,
            beforeSend: function() {
                $(element).prop('disabled', true);
            },
            complete: function() {
                $(element).prop('disabled', false);
            },
            dataType: 'html',
            success: function(data) {
                $('#modal-newsletter').remove();
                html = '<div id="modal-newsletter" class="modal">';
                html += '  <div class="modal-dialog">';
                html += '    <div class="modal-content">';
                html += '      <div class="modal-header">';
                html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
                html += '        <h4 class="modal-title">Sign up to our newsletter</h4>';
                html += '      </div>';
                html += '      <div class="modal-body">' + data + '</div>';
                html += '    </div>';
                html += '  </div>';
                html += '</div>';
                $('body').append(html);
                $('#modal-newsletter').modal('show');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    });
});