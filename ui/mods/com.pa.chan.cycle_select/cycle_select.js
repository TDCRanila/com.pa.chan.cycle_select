(function() 
{
    var hotkey_id = 'cycle_through_current_selection';
    var hotkey_set_name = 'gameplay';
    var hotkey_display_sub_group_name = 'Cycle Select';

    action_sets[hotkey_set_name][hotkey_id] = function () 
    {
        if (model[hotkey_id]) 
        {
            model[hotkey_id].apply(this, arguments);
        }
    };

    api.settings.definitions.keyboard.settings.cycle_through_current_selection = 
    {
        title: 'Cycle Through Current Selection',
        type: 'keybind',
        set: hotkey_set_name,
        display_group: 'mods',
        display_sub_group: hotkey_display_sub_group_name,
        default: ''
    };

    api.Panel.message('', 'inputmap.reload');

})();
